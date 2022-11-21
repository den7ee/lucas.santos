type BackToTop = {

}

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

export function BackToTop(props:BackToTop) {
    return(
        <div className='
        relative'
        >
            <button 
            className='
            absolute
            right-1
            bottom-1
            '
            onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="gray" d="M6.7 11.7q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.212q.175-.063.375-.063t.375.063q.175.062.325.212l4.6 4.6q.275.275.287.687q.013.413-.287.713q-.275.275-.7.275q-.425 0-.7-.275L12 7.825L8.1 11.7q-.275.275-.688.288Q7 12 6.7 11.7Zm0 6q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.213q.175-.062.375-.062t.375.062q.175.063.325.213l4.6 4.6q.275.275.287.687q.013.413-.287.713q-.275.275-.7.275q-.425 0-.7-.275L12 13.825L8.1 17.7q-.275.275-.688.288Q7 18 6.7 17.7Z"/>
                </svg>
            </button>
        </div>
    )
}
