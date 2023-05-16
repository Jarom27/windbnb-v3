import SearchContext from "../context/SearchContext";
import Modal from "./Modal";
import ModalSearchBar from "./ModalSearchBar";
import SearchBar from "./SearchBar"
import { useContext, useState } from "react";

export default function Header() {
  const {modal,setModal,setIsLocation} =useContext(SearchContext)
  function handlerLocationInput(e){
      setModal(true);
      setIsLocation(true)
  }
  function handleGuessInput(e){
      setModal(true)
      setIsLocation(false)
  }
  return (
    <>
      {modal && <Modal>
          <ModalSearchBar></ModalSearchBar>
          
      </Modal>}
      <header className="flex flex-col justify-center container p-4 lg:flex-row lg:align-middle lg:justify-between">
          <div className="">
              <img src="./images/logo.png"></img>
          </div>
          <SearchBar locationEvent = {handlerLocationInput} guessEvent = {handleGuessInput}></SearchBar>
      </header>
    </>
  )
}
