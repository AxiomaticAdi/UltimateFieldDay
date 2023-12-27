import React from "react";

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    setValue: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
    min,
    max,
    step = 1,
    value,
    setValue,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="slider-container">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className="slider"
            />
            <div className="slider-value">{value}</div>
        </div>
    );
};

export default Slider;
