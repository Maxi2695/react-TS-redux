interface Geo {
  lat: Lat;
  lng: Lng;
}
interface Address {
  street: StreetName;
  suite: Suite;
  city: CityName;
  zipcode: Zipcode;
  geo: Geo;
}

interface Company {
  name: Name;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: UniqueId;
  name: Name;
  username: Name;
  email: Email;
  address: Address;
  phone: Phone;
  website: Website;
  company: Company;
}

export interface UserState {
  user: User | null;
  loading: LoadingStatus;
  error: ErrorType;
}

