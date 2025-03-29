import {
  getExternalStoreMessage,
  type ThreadMessage,
} from "@euraxluo/react";

/**
 * @deprecated Use `getExternalStoreMessage` instead. This method was specific to Vercel RSC
 * implementation and has been replaced by a more generic external store message handler.
 */
export const getVercelRSCMessage = (message: ThreadMessage) => {
  return getExternalStoreMessage(message);
};
