import './Content.css'

function Content(){
    function changeBackground(e) {
        e.target.style.background = 'green';
      }
      function changeColor(e) {
        e.target.style.background = " aquamarine";
      }
    
    return(
<div className='con'> 
<p onMouseOver={changeBackground} onMouseOut={changeColor}>Hover over me!</p>
</div>
    );

}
export default Content;