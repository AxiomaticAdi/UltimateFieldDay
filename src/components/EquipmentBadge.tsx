import React from "react";

type EquipmentBadgeProps = {
    color: "green" | "red";
    equipment: string;
    equipmentList: string[];
    setEquipmentList: (value: string[]) => void;
};

const Badge: React.FC<EquipmentBadgeProps> = ({
    color,
    equipment,
    equipmentList,
    setEquipmentList,
}) => {
    const handleClose = () => {
        setEquipmentList(equipmentList.filter((item) => item !== equipment));
    };

    return (
        <div className={`inline-flex text-sm`}>
            <div
                className={`px-2 pb-1 bg-${color}-200 rounded-l-md text-black`}
            >
                {equipment}
            </div>
            <button
                onClick={handleClose}
                className={`px-2 pb-1 bg-${color}-300 rounded-r-md text-black`}
            >
                ×
            </button>
        </div>
    );
};

export default Badge;
