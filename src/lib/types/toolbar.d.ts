import { ToolbarHeadingTypes, ToolbarItemTypes } from './constants'

export interface IToolbarItem {
  key: ToolbarItemTypes
  value: ToolbarHeadingTypes
  icon: string
}
