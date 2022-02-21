export class user
{
   private  id: string;
   private FirstName : string;
   private LastName: string;
   private Email: string;
   private Password : string ;

   constructor(id: string, FirstName: string, LastName: string, Email:string, Password: string)
   {
    this.id  =id ;
    this.FirstName= FirstName;
    this.LastName= LastName;
    this.Email= Email;
    this.Password= Password;
   }
}