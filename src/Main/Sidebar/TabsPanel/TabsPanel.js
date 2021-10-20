import React from 'react'
import {Tabs} from 'antd'
import {panelList} from "../MenuTab/constants";

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}

export const PanelTabs = () => {

    const Tab = ({icon: Icon, title}) => {
        return (
            <div className='panel-tabs__item'>
                <div className='panel-tabs__item--image'>
                    <Icon/>
                </div>
                <span className='panel-tabs__item--title'>
          {title}
        </span>
            </div>
        )
    }

    const tabPanes = panelList.map((item, i) => {
        return (
            <TabPane
                key={i}
                tab={<Tab icon={item.icon} title={item.title}/>}
            />
        )
    })


    return (
        <Tabs
            defau
            tabPosition="right"
            className='panel-tabs'
        >
            {tabPanes}
        </Tabs>
    );

}

