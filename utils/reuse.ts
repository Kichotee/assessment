export interface StatusType {
    active: "active";
    inactive: "inactive";
    deactivated: "deactivated";
    pending: "pending";
    failed: "failed";
    warning: "warning";
    completed: "completed";
    done: "Done";
    rejected:"rejected";
    // success: "Success";
    Pending: "Pending";
    "error-critical": "error-critical";
    "success-100": "success-100";
    loading: "loading";
    continue: "continue";
    awaiting: "awaiting";
    awaitingLevelOne: "awaiting 1st Level Approval" | "awaiting 1st level approval";
    declined: "declined";
    awaitingApproval1: "awaiting approval";
    awaitingApproval2: "awaitingApproval";
    awaitingApproval3: "Awaiting Approval";
    awaitingApproval: "awaitingapproval";
    disabled: "disabled";
    disable: "disable";
    approved: "approved";
    initiated: "initiated";
    Initiated: "Not Audited";
    successful: "successful";
    0: "0";
  }
  export type ReturnColourMapperType = {
    bgcolor: string;
    color: string;
  };
  export const colourMapping = (
    key: StatusType[keyof StatusType] | undefined
  ): ReturnColourMapperType => {
    switch (key) {
      case "active":
        return {
          bgcolor: "bg-success-50",
          color: "text-success-150",
        };
      case "completed":
        return {
          bgcolor: "bg-[#DBF5FF]",
          color: "text-[#276680]",
        };
      case "Done":
        return {
          bgcolor: "bg-[#DBF5FF]",
          color: "text-[#276680]",
        };
      case "deactivated":
        return {
          bgcolor: "bg-[#FFD4D2]",
          color: "text-[#9F1F17]",
        };
      case "disable":
        return {
          bgcolor: "bg-[#FFD4D2]",
          color: "text-[#9F1F17]",
        };
      case "rejected":
        return {
          bgcolor: "bg-[#FFD4D2]",
          color: "text-error-150",
        };
      case "disabled":
        return {
          bgcolor: "bg-[#FFD4D2]",
          color: "text-[#9F1F17]",
        };
      case "inactive":
        return {
          bgcolor: "",
          color: "",
        };
      case "loading":
        return {
          bgcolor: "",
          color: "",
        };
      case "pending":
        return {
          bgcolor: "bg-[#FFF0CC]",
          color: "text-[#E89603]",
        };
      case "Pending":
        return {
          bgcolor: "bg-[#FFF0CC]",
          color: "text-[#E89603]",
        };
      case "warning":
        return {
          bgcolor: "bg-[#FFD166]",
          color: "text-[#ffffff]",
        };
      case "successful":
        return {
          bgcolor: "bg-success-50",
          color: "text-[#33c133]",
        };
      case "success-100":
        return {
          bgcolor: "bg-success-100",
          color: "text-success-100",
        };
      case "error-critical":
        return {
          bgcolor: "bg-error-critical",
          color: "text-critical",
        };
      case "awaiting":
        return {
          bgcolor: "",
          color: "",
        };
  
      case "declined":
        return {
          bgcolor: "bg-[#FEF3F2]",
          color: "text-[#B42318]",
        };
  
      case "failed":
        return {
          bgcolor: "bg-[#FEF3F2]",
          color: "text-[#F91D0A]",
        };
  
      case "awaitingapproval":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
  
      case "awaiting approval":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
  
      case "Awaiting Approval":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
  
      case "awaiting 1st level approval":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
  
      case "awaitingApproval":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
      case "approved":
        return {
          bgcolor: "bg-success-50",
          color: "text-success-150",
        };
      case "continue":
        return {
          bgcolor: "bg-brand-primary",
          color: "text-white",
        };
      case "initiated":
        return {
          bgcolor: "bg-neutral-bg",
          color: "text-neutral-black",
        };
      
      default:
        return {
          bgcolor: "",
          color: "",
        };
    }
  };
  export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  