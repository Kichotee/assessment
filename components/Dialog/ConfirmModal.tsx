import ModifiedDialog from "./ModifiedDialog";
type IProps={
    open:boolean,
    children?:React.ReactNode;
    title:string;
    actionText:string;
    description?:string;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    icon:React.ReactNode
}
const ConfirmActionModal = (props:IProps) => {
    const {open,setOpen, actionText, title,icon,description ,children}=props
    const handleClose=()=>{
        setOpen(false)
    }
    return ( 
    <ModifiedDialog title={title}  actionText={actionText} description={description} onClose={handleClose} open={open} >
     <div className="mx-auto py-6 w-max">

     {   icon}
     </div>
        {children}
    </ModifiedDialog> );
}
 
export default ConfirmActionModal;