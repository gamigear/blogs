
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";


export const Selectoption1 = [
	{ value: "Selection-1", label: "Selection-1" },
	{ value: "Selection-2", label: "Selection-2" },
	{ value: "Selection-3", label: "Selection-3" },
	{ value: "Selection-4", label: "Selection-4" },
	{ value: "Selection-5", label: "Selection-5" }
];

export const Selectoption2 = [
	{ value: "Multiple-1", label: "Multiple-1" },
	{ value: "Multiple-2", label: "Multiple-2" },
	{ value: "Multiple-3", label: "Multiple-3" },
	{ value: "Multiple-4", label: "Multiple-4" },
	{ value: "Multiple-5", label: "Multiple-5" }
];

export const Selectoption3 = [
	{ value: "Texas", label: "Texas" },
	{ value: "Georgia", label: "Georgia" },
	{ value: "California", label: "California" },
	{ value: "Washington D.C", label: "Washington D.C" },
	{ value: "Virginia", label: "Virginia" }
];

export const Selectoption4 = [
	{ value: "Kevin", label: "Kevin" },
	{ value: "Maya", label: "Maya" },
	{ value: "Bradus", label: "Bradus" },
	{ value: "Goldhens", label: "Goldhens" },
	{ value: "Angeline", label: "Angeline" }
];

export const Selectmaxoption = [
	{ value: "Andrew", label: "Andrew" },
	{ value: "Maya", label: "Maya" },
	{ value: "Brodus Axel", label: "Brodus Axel" },
	{ value: "Goldhens", label: "Goldhens" },
	{ value: "Angelina", label: "Angelina" }
];

export const Selectoption5 = [
	{
		value: "Andrew", label: (
			<div>
				<BaseImage  src={"/build/assets/images/faces/select2/p-1.jpg"} alt="Option 1" className="me-2 me-2" />
				Andrew
			</div>
		)
	},
	{
		value: "Maya", label: (
			<div>
				<BaseImage  src={"/build/assets/images/faces/select2/p-2.jpg"} alt="Option 1" className="me-2" />
				Maya
			</div>
		)
	},
	{
		value: "Brodus Axel", label: (
			<div>
				<BaseImage  src={"/build/assets/images/faces/select2/p-3.jpg"} alt="Option 1" className="me-2" />
				Brodus Axel
			</div>
		)
	},
	{
		value: "Goldhens", label: (
			<div>
				<BaseImage  src={"/build/assets/images/faces/select2/p-4.jpg"} alt="Option 1" className="me-2" />
				Goldhens
			</div>
		)
	},
	{
		value: "Angelina", label: (
			<div>
				<BaseImage  src={"/build/assets/images/faces/select2/p-5.jpg"} alt="Option 1" className="me-2" />
				Angelina
			</div>
		)
	}
];
