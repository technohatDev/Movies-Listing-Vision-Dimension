/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FetchOptions extends RequestInit {
	next?: {
		revalidate?: number | false;
		tags?: string[];
	};
}

export interface FetchProps {
	url: string;
	data: any;
	options: FetchOptions;
	method?: string;
}

export interface FetchResponse<T = []> {
	success: boolean;
	statusCode: number;
	data: T;
}
