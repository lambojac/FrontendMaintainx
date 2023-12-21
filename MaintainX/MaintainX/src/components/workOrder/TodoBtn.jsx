import { useState } from "react";
import FilterDropdown from "./TodoNewTask";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const TodoBtn = () => {

  const [eachTab, setEachTab] = useState('tab1');
  
  const handleTabChange = (tab) => {
    setEachTab(tab);
  };

  return (
    <div className="Tabby">
        <div className="Tabby__btnCont">
          <button className={eachTab === 'tab1' ? "Tabby__btnCont__activeBtn" : "Tabby__btnCont__tab"} onClick={() => handleTabChange('tab1')}>To Do</button>
          <button className={eachTab === 'tab2' ? "Tabby__btnCont__activeBtn" : 'Tabby__btnCont__tab'} onClick={() => handleTabChange('tab2')}>Done</button>
        </div>
        <div className="Tabby__tabsContents">
          {eachTab==='tab1' && <div className={ eachTab === 'tab1' ? 'activeTab': 'tab__content'}>
          <div className='Tabby__tabsContents__ContentFilter'>
            <span className='Tabby__tabsContents__ContentFilter__filter'>
              sort by: <FilterDropdown/>
            </span>
            <MdOutlineMarkEmailUnread className="Tabby__tabsContents__ContentFilter__icon"/>
          </div>
            </div>}
          {eachTab==='tab2' && <div className={ eachTab === 'tab2' ? 'activeTab': 'tab__content'}>
          <div className='Tabby__tabsContents__ContentFilter'>
        
         </div>
          </div>}
        </div>
    </div>
  )
}

export default TodoBtn