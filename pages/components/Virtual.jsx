import ReactCompareImage from 'react-compare-image';
function Virtual() {
  return (
    <div className="virtual-container">
      <div className="left-virtual">
        <span>virtual food review</span>
        <span>never buy and eat the wrong food again</span>
        <span>Try us</span>
      </div>
      <div className="right-virtual">
        <div className="virtual-wrapper">
            <ReactCompareImage
              leftImage="../asset/chicken2.jpg"
              rightImage="../asset/cripsy.jpg"
            />
        </div>
      </div>
    </div>
  );
}

export default Virtual;
// 1947