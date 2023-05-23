export interface WorkScheduleInterface {
	week_date: {
		started_at: string;
		end_at: string;
	};
	monday: { name: string; date: string }[];
	tuesday: { name: string; date: string }[];
	wednesday: { name: string; date: string }[];
	thursday: { name: string; date: string }[];
	friday: { name: string; date: string }[];
	saturday: { name: string; date: string }[];
	sunday: { name: string; date: string }[];
}