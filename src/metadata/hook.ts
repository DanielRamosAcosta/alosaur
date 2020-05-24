import { AreaMetadataArgs } from './area.ts';
import { BusinessType } from '../types/business.ts';
import { ControllerMetadataArgs } from './controller.ts';
import { ActionMetadataArgs } from './action.ts';
import { HookTarget } from '../models/hook.ts';

/**
 * Hook metadata used to storage information about registered hooks.
 */
export interface HookMetadataArgs {

  area?: AreaMetadataArgs;
  controller?: ControllerMetadataArgs;
  action?: ActionMetadataArgs;

  /**
   * Indicates object which is used by this hook.
   */
  target: Object;

  /**
   * Type, default controller
   */
  type: BusinessType;

  /**
   * Action name of class, TODO(irustm): rename to action name
   */
  method: string;

  /**
   * Instance of hook
   */
  instance: HookTarget<any>;

  /**
   * Payload for hook instance
   */
  payload?: any
}