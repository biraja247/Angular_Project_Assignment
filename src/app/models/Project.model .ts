export class Project
{
   private  id: string;
   private Name : string;
   private Details: string;
   private CreatedOn: string;


   constructor(id: string, Name: string, Details: string, CreatedOn:string)
   {
    this.id  =id ;
    this.Name= Name;
    this.Details= Details;
    this.CreatedOn= CreatedOn;
   
   }
}
