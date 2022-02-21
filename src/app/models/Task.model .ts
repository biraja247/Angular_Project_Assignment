export class Task
{
   private  id: string;
   private ProjectID : string;
   private Status: string;
   private AssignedToUserID: string;
   private Detail : string ;
   private CreatedOn : string ;
   constructor(id: string, ProjectID: string, Status: string, AssignedToUserID:string, Detail: string, CreatedOn:string )
   {
    this.id  =id ;
    this.ProjectID= ProjectID;
    this.Status= Status;
    this.AssignedToUserID= AssignedToUserID;
    this.Detail= Detail;
    this.CreatedOn= CreatedOn;
   }
}
