export interface Client {
  first_name: string;
  last_name: string;
  address: {
    line_1: string;
    line_2: string;
    city: string;
    region: string;
    postal: string;
  };
}
