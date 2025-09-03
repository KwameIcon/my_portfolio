"use client";
import { toggleTaskbarIcon } from '@/store/slice/taskbarSlice';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import ModalHeader from './modalHeader';
import { useState } from 'react';





// interface ModalProps {
//   title: string;
//   open: boolean;
//   minimize: boolean;
//   maximize: boolean;
//   close: boolean;
// }

export default function CustomeModal() {

  const [defaultSize, setDefaultSize] = useState({ width: 800, height: 600 });
  const [isMaximized, setIsMaximized] = useState(false);
  const isFinderOpened = false;
  // const isFinderOpened = useSelector((state: RootState) => state.taskbar.taskbarIcons.find(icon => icon.id === 'finder')?.isOpen);
  const dispatch = useDispatch();




  return (
    <>
      <Modal
        centered
        open={isFinderOpened}
        footer={false}
        closable={false}
        maskClosable={false}
        mask={false}
        width={isMaximized ? '100vw' : defaultSize.width}
        styles={{ body: { height: isMaximized ? '100vh' : defaultSize.height } }}
        onCancel={() => dispatch(toggleTaskbarIcon({ id: 'finder' }))}
        className='!relative !overflow-hidden !rounded-lg'
      >
        <ModalHeader title='Finder' />
      </Modal>
    </>
  );
}

