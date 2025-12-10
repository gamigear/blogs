// src/utils/slider.js
import noUiSlider from 'nouislider';

// Initialize multiple sliders
export function initializeSliders(
    sliderStart: HTMLElement,
    FitHandles: HTMLElement,
    Rounded: HTMLElement,
    marginSlider: HTMLElement,
    Square: HTMLElement,
    sliderPrimary: HTMLElement,
    sliderSecondary: HTMLElement,
    sliderWarning: HTMLElement,
    sliderInfo: HTMLElement,
    sliderSuccess: HTMLElement,
    sliderDanger: HTMLElement,
    verticalSlider: HTMLElement,
    colorSlider: HTMLElement,
    tooltipSlider: HTMLElement
): void {
    /* default slider */
    noUiSlider.create(sliderStart, {
        start: [30, 80],
        connect: true,
        range: {
            min: 0,
            max: 100
        }
    });

    /* fit handle slider */
    noUiSlider.create(FitHandles, {
        start: [30, 80],
        connect: true,
        range: {
            min: 1,
            max: 100
        }
    });

    /* round slider */
    noUiSlider.create(Rounded, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* square slider */
    noUiSlider.create(Square, {
        start: [50],
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* primary colored slider */
    noUiSlider.create(sliderPrimary, {
        margin: 30,
        start: [20, 80],
        connect: true,
        tooltips: [true, true],
        range: {
            min: 0,
            max: 100
        }
    });

    /* secondary colored slider */
    noUiSlider.create(sliderSecondary, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* warning colored slider */
    noUiSlider.create(sliderWarning, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* info colored slider */
    noUiSlider.create(sliderInfo, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* success colored slider */
    noUiSlider.create(sliderSuccess, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* danger colored slider */
    noUiSlider.create(sliderDanger, {
        start: [50],
        step: 1,
        connect: [true, false],
        range: {
            min: 0,
            max: 100
        }
    });

    /* vertical slider */
    noUiSlider.create(verticalSlider, {
        start: 0,
        orientation: 'vertical',
        range: {
            min: 0,
            max: 100
        }
    });

    /* sliding handles tooltips */
    noUiSlider.create(tooltipSlider, {
        start: [30, 80],
        tooltips: true,
        connect: true,
        range: {
            min: 0,
            max: 100
        }
    });

    /* merging tooltips slider */
    noUiSlider.create(marginSlider, {
        margin: 30,
        start: [40],
        // tooltips: [false, false], // commented out in original
        range: {
            min: 10,
            max: 100
        }
    });

    /* color slider */
    noUiSlider.create(colorSlider, {
        start: [20, 150, 220, 270],
        connect: [false, true, true, true, true],
        range: {
            min: 0,
            max: 300
        }
    });

    // Apply custom classes to 'connect' elements on colorSlider
    const connect = colorSlider.querySelectorAll<HTMLElement>('.noUi-connect');
    const classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

    for (let i = 0; i < connect.length; i++) {
        connect[i].classList.add(classes[i]);
    }
}

export function initializeNonLinearSlider(
  sliderElement: HTMLElement,
  lowerValueElement: HTMLElement,
  upperValueElement: HTMLElement
): void {
  // Initialize the non-linear slider
  noUiSlider.create(sliderElement, {
    connect: true,
    behaviour: 'tap',
    start: [500, 4000],
    range: {
      min: 0,
      '10%': [500, 500],
      '50%': [4000, 1000],
      max: 10000,
    }
  });

  // Access the slider API from the created sliderElement
  const slider = (sliderElement as any).noUiSlider!;

  slider.on('update', function (
    values: (string | number)[],
    handle: number,
    unencoded: number[],
    isTap: boolean,
    positions: number[]
  ) {
    if (handle === 0) {
      lowerValueElement.innerHTML = `${values[handle]}, ${positions[handle].toFixed(2)}%`;
    } else {
      upperValueElement.innerHTML = `${values[handle]}, ${positions[handle].toFixed(2)}%`;
    }
  });
}


export function initializeColorSliders(
  sliders: HTMLElement[],
  resultElement: HTMLElement
): void {
  let colors = [0, 0, 0];

  sliders.forEach((slider, index) => {
    noUiSlider.create(slider, {
      start: 127,
      connect: [true, false],
      orientation: 'vertical',
      range: {
        min: 0,
        max: 255,
      },
    });

    (slider as any).noUiSlider!.on('update', () => {
      // slider.noUiSlider.get() returns string or string[] depending on handles,
      // but since start is single value, it's string here.
      const val = (slider as any).noUiSlider!.get() as string;
      colors[index] = Number(val);
      const color = `rgb(${colors.join(',')})`;
      resultElement.style.background = color;

      // For better contrast, you might want to set color to white or black depending on background brightness.
      resultElement.style.color = color;
    });
  });
}

export function initializePipsSlider(sliderElement: HTMLElement): void {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: [50],
    pips: { mode: 'count', values: 5 },
  });

  // Query all the pip elements (these show the values on the slider)
  const pips = sliderElement.querySelectorAll<HTMLElement>('.noUi-value');

  pips.forEach((pip) => {
    pip.style.cursor = 'pointer';

    pip.addEventListener('click', () => {
      const valueAttr = pip.getAttribute('data-value');
      const value = valueAttr ? Number(valueAttr) : NaN;
      if (!isNaN(value)) {
        (sliderElement as any).noUiSlider!.set(value);
      }
    });
  });
}

// Function to initialize the slider with soft limits
export function initializeSoftSlider(sliderElement: HTMLElement): void {
  noUiSlider.create(sliderElement, {
    start: 50,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'values',
      values: [20, 80],
      density: 4
    }
  });

  const slider = (sliderElement as any).noUiSlider!;

  slider.on('change', (values: (string | number)[], handle: number) => {
    const val = typeof values[handle] === 'string' ? parseFloat(values[handle]) : values[handle];
    if (val < 20) {
      slider.set(20);
    } else if (val > 80) {
      slider.set(80);
    }
  });
}

let lockedState = false;
let lockedValues = [60, 80];

export function createLockedSlider(
  sliderElement: HTMLElement,
  startValue: number | number[],
  min: number,
  max: number,
  onUpdate?: (values: (string | number)[], handle: number) => void
): void {
  noUiSlider.create(sliderElement, {
    start: startValue,
    animate: false,
    range: {
      min,
      max,
    },
  });

  const slider = (sliderElement as any).noUiSlider!;

  slider.on('update', (values: (string | number)[], handle: number) => {
    if (onUpdate) {
      onUpdate(values, handle);
    }
  });
}

export function lockSliders(
  lockButton: HTMLElement,
  slider1: HTMLElement,
  slider2: HTMLElement
): void {
  lockButton.addEventListener('click', () => {
    lockedState = !lockedState;
    lockButton.textContent = lockedState ? 'Unlock' : 'Lock';
  });

  function crossUpdate(value: number, slider: HTMLElement) {
    if (!lockedState) return;

    const a = slider1 === slider ? 0 : 1;
    const b = a === 0 ? 1 : 0;

    const adjustedValue = value - (lockedValues[b] - lockedValues[a]);
    (slider as any).noUiSlider!.set(adjustedValue);
  }

  function setLockedValues() {
    lockedValues = [
      Number((slider1 as any).noUiSlider!.get()),
      Number((slider2 as any).noUiSlider!.get())
    ];
  }

  (slider1 as any).noUiSlider!.on('change', setLockedValues);
  (slider2 as any).noUiSlider!.on('change', setLockedValues);

  (slider1 as any).noUiSlider!.on('slide', (values: (string | number)[], handle: number) => {
    crossUpdate(Number(values[handle]), slider2);
  });

  (slider2 as any).noUiSlider!.on('slide', (values: (string | number)[], handle: number) => {
    crossUpdate(Number(values[handle]), slider1);
  });
}


// Function to initialize and set up the slider
export function initSlider(
  sliderElement: HTMLElement,
  threshold: number,
  separator: string
): void {
  noUiSlider.create(sliderElement, {
    start: [0, 10000],
    connect: true,
    tooltips: [true, true],
    range: {
      min: 0,
      max: 10000,
    },
  });

  mergeTooltips(sliderElement, threshold, separator);
}

// Function to merge tooltips
export function mergeTooltips(
  sliderElement: HTMLElement,
  threshold: number,
  separator: string
): void {
  const slider = (sliderElement as any).noUiSlider!;
  const textIsRtl = getComputedStyle(sliderElement).direction === 'rtl';
  const isRtl = slider.options.direction === 'rtl';
  const isVertical = slider.options.orientation === 'vertical';
  const tooltips = slider.getTooltips() as (HTMLElement | null)[];
  const origins = slider.getOrigins() as HTMLElement[];

  // Move tooltips into the origin elements.
  tooltips.forEach((tooltip, index) => {
    if (tooltip) {
      origins[index].appendChild(tooltip);
    }
  });

  slider.on('update', function (
    values: (string | number)[],
    handle: number,
    unencoded: number[],
    tap: boolean,
    positions: number[]
  ) {
    const pools: number[][] = [[]];
    const poolPositions: number[][] = [[]];
    const poolValues: (string | number)[][] = [[]];
    let atPool = 0;

    if (tooltips[0]) {
      pools[0][0] = 0;
      poolPositions[0][0] = positions[0];
      poolValues[0][0] = values[0];
    }

    for (let i = 1; i < positions.length; i++) {
      if (!tooltips[i] || (positions[i] - positions[i - 1]) > threshold) {
        atPool++;
        pools[atPool] = [];
        poolValues[atPool] = [];
        poolPositions[atPool] = [];
      }
      if (tooltips[i]) {
        pools[atPool].push(i);
        poolValues[atPool].push(values[i]);
        poolPositions[atPool].push(positions[i]);
      }
    }

    pools.forEach((pool, poolIndex) => {
      const handlesInPool = pool.length;

      for (let j = 0; j < handlesInPool; j++) {
        const handleNumber = pool[j];

        if (j === handlesInPool - 1) {
          let offset = 0;
          poolPositions[poolIndex].forEach(value => {
            offset += 1000 - value;
          });

          const direction = isVertical ? 'bottom' : 'right';
          const last = isRtl ? 0 : handlesInPool - 1;
          const lastOffset = 1000 - poolPositions[poolIndex][last];
          offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset;

          // Center this tooltip over the affected handles
          if (tooltips[handleNumber]) {
            tooltips[handleNumber]!.innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber]!.style.display = 'block';
            (tooltips[handleNumber]!.style as any)[direction] = `${offset}%`;
          }
        } else {
          // Hide this tooltip
          if (tooltips[handleNumber]) {
            tooltips[handleNumber]!.style.display = 'none';
          }
        }
      }
    });
  });
}
