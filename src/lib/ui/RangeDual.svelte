<script>
	import { Label } from '$lib/ui';

	let {
		min = 1,
		max = 100,
		minValue = min,
		maxValue = max,
		step = 1,
		format = 'comma',
		name = '',
		id = name,
		label = '',
		error = '',
		class: _class = ''
	} = $props();

	let minPos = $state();
	let maxPos = $state();
	let minPercent = $state(0);
	let maxPercent = $state(0);
	let isDragging = $state(false);
	let sliderEl = $state();
	let minValueEl = $state();
	let maxValueEl = $state();
	let minValueFormatted = $derived(formatValues(minValue));
	let maxValueFormatted = $derived(formatValues(maxValue));
	let animateHandles = $state(false);

	min = Number(min);
	max = Number(max);
	minValue = Number(minValue);
	maxValue = Number(maxValue);
	step = Number(step);

	$effect(() => {
		minValue && setPosition();
		maxValue && setPosition();
	});

	function init() {
		setPosition();
		formatValues();
	}

	function setPosition() {
		minPos = getMinPos(minValue);
		maxPos = getMaxPos(maxValue);
	}

	function getMinPos(minValue) {
		if (minValue <= min) return 0;
		if (minValue > maxValue) return maxValue;
		return ((minValue - min) / (max - min)) * sliderEl.offsetWidth;
	}

	function getMaxPos(maxValue) {
		if (maxValue >= max) return sliderEl.offsetWidth;
		if (maxValue < minValue) return minPos;
		return ((maxValue - min) / (max - min)) * sliderEl.offsetWidth;
	}

	function handleDrag(e) {
		if (!isDragging) return;

		setCaretColor('transparent');
		animateHandles = false;

		// Left handle
		if (isDragging === 'min') {
			minValueEl.focus();

			// Set minPos to the current position plus the movement
			minPos = Math.min(Math.max(minPos + e.movementX, 0), sliderEl.offsetWidth);
			minPos = minPos > maxPos ? maxPos : minPos;

			// Get minPos as a percentage
			minPercent = minPos === 0 ? 0 : (minPos / sliderEl.offsetWidth) * 100;

			// Convert percentage to minValue
			minValue = minPercent === 0 ? min : (max - min) * (minPercent / 100) + min;

			// Round to step value
			if (step) minValue = Math.round(minValue / step) * step;
		}

		// Right handle
		if (isDragging === 'max') {
			maxValueEl.focus();

			// Set maxPos to the current position plus the movement
			maxPos = Math.min(Math.max(maxPos + e.movementX, 0), sliderEl.offsetWidth);
			maxPos = maxPos < minPos ? minPos : maxPos;

			// Get maxPos as a percentage
			maxPercent = maxPos === 0 ? 0 : (maxPos / sliderEl.offsetWidth) * 100;

			// Convert percentage to maxValue
			maxValue = maxPercent === 0 ? max : (max - min) * (maxPercent / 100) + min;

			// Round to step value
			if (step) maxValue = Math.round(maxValue / step) * step;
		}
		formatValues();
	}

	function formatValues(value) {
		if (value === undefined) return;
		if (format === 'comma') {
			return value.toLocaleString('en-US');
		}
		if (format === 'dollars') {
			return `$${value.toLocaleString('en-US')}`;
		}
	}

	function nudgeMin(e) {
		if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
		animateHandles = true;
		if (e.key === 'ArrowUp' && minValue < maxValue) {
			minValue = getNumberFromFormatted(minValue) + step;
		} else if (e.key === 'ArrowDown' && minValue > min) {
			minValue = getNumberFromFormatted(minValue) - step;
		}
		formatValues(minValue);
		setPosition();
		setCaretColor('transparent');
	}

	function nudgeMax(e) {
		if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
		animateHandles = true;
		if (e.key === 'ArrowUp' && maxValue < max) {
			maxValue = getNumberFromFormatted(maxValue) + step;
		} else if (e.key === 'ArrowDown' && maxValue > minValue) {
			maxValue = getNumberFromFormatted(maxValue) - step;
		}
		formatValues(minValue);
		formatValues(maxValue);
		setPosition();
		setCaretColor('transparent');
	}

	function getNumberFromFormatted(formatted = '') {
		formatted = String(formatted).match(/\d+/gi) || [''];
		return Number(formatted.join(''));
	}

	function handleInputFocus() {
		animateHandles = true;
		setCaretColor('inherit');
	}

	function handleInput() {
		minValue = getNumberFromFormatted(minValueEl.value);
		maxValue = getNumberFromFormatted(maxValueEl.value);
		setPosition();
	}

	function setCaretColor(color = 'inherit') {
		minValueEl.style.setProperty('caret-color', color);
		maxValueEl.style.setProperty('caret-color', color);
	}
</script>

<svelte:window on:mouseup={() => (isDragging = false)} on:mousemove={handleDrag} />

<ui-range-dual class="lib-ui {_class}" use:init>
	<div>
		<Label forId={id} {label} isError={Boolean(error)}></Label>
		<!-- Slider -->
		<div class="slider" bind:this={sliderEl}>
			<!-- Full Slider Track -->
			<div class="slider-track"></div>

			<!-- Middle Indicator Bar -->
			<div
				class="middle-indicator-bar"
				class:animateHandles
				style="left:{minPos}px; width:{maxPos - minPos}px"
			></div>

			<!-- Left Handle -->
			<div
				class="handle"
				class:animateHandles
				on:mousedown={() => (isDragging = 'min')}
				role="slider"
				tabindex="0"
				aria-valuenow={minValue}
				aria-valuemin={min}
				aria-valuemax={max}
				style="left:{minPos}px"
				aria-labelledby="range-label"
			></div>

			<!-- Right Handle -->
			<div
				class="handle"
				class:animateHandles
				on:mousedown={() => (isDragging = 'max')}
				role="slider"
				tabindex="0"
				aria-valuenow={maxValue}
				aria-valuemin={min}
				aria-valuemax={max}
				style="left:{maxPos}px"
				aria-labelledby="range-label"
			></div>
		</div>
	</div>

	<div class="text-inputs">
		<!-- Min Text Input -->
		<div>
			<input
				type="text"
				maxlength="5"
				value={minValueFormatted}
				bind:this={minValueEl}
				on:input={handleInput}
				on:click={handleInputFocus}
				on:focus={handleInputFocus}
				on:keydown={nudgeMin}
			/>
		</div>

		<!-- Max Text Input -->
		<div>
			<input
				type="text"
				maxlength="5"
				value={maxValueFormatted}
				bind:this={maxValueEl}
				on:input={handleInput}
				on:click={handleInputFocus}
				on:focus={handleInputFocus}
				on:keydown={nudgeMax}
			/>
		</div>
	</div>
</ui-range-dual>

<style>
	.lib-ui {
		display: block;
		margin-top: var(--ui-form-item-margin-top);
		flex: 1;
	}

	.slider {
		position: relative;
		z-index: 10;
		margin-left: 12px;
		margin-right: 12px;
		margin-top: 18px;
		height: 8px;
	}

	.slider-track {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
		margin-left: -12px;
		margin-right: -12px;
		border-radius: var(--ui-border-radius);
		background-color: var(--light);
	}

	.middle-indicator-bar {
		position: absolute;
		bottom: 0;
		top: 0;
		z-index: 20;
		border-radius: var(--ui-border-radius);
		background-color: var(--brand-4);
	}

	.handle {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 30;
		margin-left: -4px;
		margin-top: -8px;
		height: 24px;
		width: 24px;
		transform: translateX(-8px);
		cursor: col-resize;
		border-radius: 50%;
		background-color: var(--brand-4);
	}

	.animateHandles {
		transition: all 200ms ease-in-out;
	}

	.text-inputs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	input[type='text'] {
		width: 96px;
		border-color: var(--ui-border-color);
		border-radius: var(--ui-border-radius);
		text-align: center;
	}
</style>
