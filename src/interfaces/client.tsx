export interface client {
  firstName: string;
  lastName: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    region: string;
    postal: string;
  };
}
