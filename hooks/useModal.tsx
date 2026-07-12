export default function useModal(){
    function handleModalOpen(id:string){
        const modal = document.getElementById(id)
        modal?.classList.add("active")
    }
    function handleModalClose(id:string){
        const modal = document.getElementById(id)
        modal?.classList.remove("active")
    }

    return {
        handleModalOpen,
        handleModalClose
    }
}