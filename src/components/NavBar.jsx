export default function NavBar({previousButton, nextButton}) {
    return(
       <>
        <button type="button" onClick={previousButton}>Précédent</button>
        <button type="button" onClick={nextButton}>Suivant</button>
       </>
    )
}