import "./PortfolioList.scss";

const PortfolioList = ({title,setSelected,id,active}) => {
  return (
    <li className={active ? "portfolioList active" :"portfolioList"}
    onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList