/// i made this interface to be used when returning user data to the client
/// so that the password field is not returned to the client 
/// nor the code and the children infos 
/// i ll return only the ids of the children and the user role

interface IUserOutput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio?: string;
  role: string;
  children: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export default IUserOutput;
