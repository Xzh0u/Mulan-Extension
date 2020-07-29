import React, { createContext, useReducer, Dispatch, RefObject } from 'react';

const initialVideoContext = {
  rootRef: (undefined as unknown) as RefObject<HTMLDivElement>,
  video: {
    curTime: 0,
    captions: {
      context: [],
      startTime: [],
      endTime: [],
    } as CaptionType,
    imgs: [] as ImageType[],
  },
  dispatch: (undefined as unknown) as Dispatch<ActionType>,
  status: { status: 'empty' } as Status,
};

export const videoContext = createContext(initialVideoContext);

const reducer = (state: VideoContextType, action: ActionType) => {
  switch (action.type) {
    case 'setTime':
      return {
        ...state,
        video: {
          ...state.video,
          curTime: action.payload.time,
        },
      };
    case 'setImgs':
      return {
        ...state,
        video: {
          ...state.video,
          imgs: action.payload.imgs,
        },
      };
    case 'setCaptions':
      return {
        ...state,
        video: {
          ...state.video,
          captions: action.payload.captions,
        },
      };
    default:
      return state;
  }
};

const VideoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVideoContext);
  return (
    <videoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </videoContext.Provider>
  );
};

type Status =
  | { status: 'empty' }
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: any };

type ActionType =
  | { type: 'test'; payload: { test: string } }
  | { type: 'setTime'; payload: { time: number } }
  | { type: 'setImgs'; payload: { imgs: ImageType[] } }
  | { type: 'setCaptions'; payload: { captions: CaptionType } };

export interface CaptionType {
  context: string[];
  startTime: number[];
  endTime: number[];
}

export interface ImageType {
  url: string;
  time: number;
}

export type VideoContextType = typeof initialVideoContext;

export default VideoProvider;
