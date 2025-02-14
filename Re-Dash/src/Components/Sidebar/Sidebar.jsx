import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faBars, faBook, faBookmark, faCartShopping, faFile, faFileAlt, faLink, faMailBulk, faMailReply, faMessage, faNetworkWired, faPhone, faPhotoFilm, faPieChart, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

export const Sidebar=()=>{
    const sideItem1 = [
        {title:"Home",path:"/home",icon:<FontAwesomeIcon icon={faPieChart} />},
        {title:"Ecommerce",path:"/ecommerce",icon:<FontAwesomeIcon icon={faCartShopping} />},
        {title:"CRM",path:"/crm",icon:<FontAwesomeIcon icon={faPhone} />},
        {title:"Project Management",path:"/project_management",icon:<FontAwesomeIcon icon={faFile} />},
        {title:"Travel Agency",path:"/travel_agency",icon:<FontAwesomeIcon icon={faSuitcase} />},
        {title:"Chat",path:"/chat",icon:<FontAwesomeIcon icon={faMessage} />},
        {title:"Email",path:"/email",icon:<FontAwesomeIcon icon={faMailBulk} />},
        {title:"Events",path:"/events",icon:<FontAwesomeIcon icon={faBookmark} />},
        {title:"Kanban",path:"/kanban",icon:<FontAwesomeIcon icon={faBarChart} />},
        {title:"Social",path:"/social",icon:<FontAwesomeIcon icon={faNetworkWired} />},
        {title:"Gallary",path:"/gallary",icon:<FontAwesomeIcon icon={faPhotoFilm} />},
        {title:"File Manager",path:"/file_manager",icon:<FontAwesomeIcon icon={faFileAlt} />}
    ];

    const sideItem2=[
      {title: "Starter", path: "/starter", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Faq", path: "/faq", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Landing", path: "/landing", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Pricing", path: "/pricing", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Notification", path: "/notification", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Members", path: "/members", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Timeline", path: "/timeline", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Errors", path: "/errors", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Authentication", path: "/authentication", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Layouts", path: "/layouts", icon:<FontAwesomeIcon icon={faPieChart} />},
    ]

    const sideItem3=[
      {title: "Forms", path: "/forms", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Icons", path: "/icons", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Tables", path: "/tables", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Echarts", path: "/echarts", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Components", path: "/components", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Utilities", path: "/utilities", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Widgets", path: "/widgets", icon:<FontAwesomeIcon icon={faPieChart} />},
      {title: "Multi Level", path: "/multi-level", icon:<FontAwesomeIcon icon={faPieChart} />},
    ]
  return (
    <div>
   <div id='Sidebar'>
    {sideItem1.map((item,index)=>(
      <div id="sideItem">
      <li><span id="icon">{item.icon}</span>{item.title}</li>
      </div>
    ))}
    <span id='spanSidebar'>Pages</span>
    {sideItem2.map((item,index)=>(
      <div id="sideItem">
      <li><span id="icon">{item.icon}</span>{item.title}</li>
      </div>
    ))}

    <span id='spanSidebar'>Pages</span>
    {sideItem3.map((item,index)=>(
      <div id="sideItem">
      <li><span id="icon">{item.icon}</span>{item.title}</li>
      </div>
    ))}
   </div>
    </div>
  )
}
export default Sidebar