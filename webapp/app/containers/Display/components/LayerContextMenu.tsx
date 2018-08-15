import * as React from 'react'

const Menu = require('antd/lib/menu')
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const Dropdown = require('antd/lib/dropdown')

export class LayerContextMenu extends React.PureComponent {

  private getPopupContainer = () => {
    const { children } = this.props
    const layer = children.props.layer
    return document.getElementById(`layer_${layer.id}`)
  }

  public render () {
    const { children } = this.props
    const layer = children.props.layer
    const menu = (
      <Menu>
        <MenuItem key="name">{layer.name}</MenuItem>
        <MenuItem key="cut">剪切</MenuItem>
        <MenuItem key="copy">复制</MenuItem>
        <MenuItem key="paste">粘贴</MenuItem>
        <SubMenu title="层级">
          <MenuItem key="upper">上移一层</MenuItem>
        </SubMenu>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['hover']} getPopupContainer={this.getPopupContainer}>
        {children}
      </Dropdown>
    )
  }
}

export default LayerContextMenu
