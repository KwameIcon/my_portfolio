"use client";;
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ModalHeader from './modalHeader';
import { useState } from 'react';
import { removeTaskbarIcon } from '@/store/slice/taskbarSlice';
import { RootState } from '@/store/store';





interface ModalProps {
  title: string;
  type: string;
  id: string;
  children: React.ReactNode;
}

export default function CustomeModal({ title, type, id, children }: ModalProps) {

  const [defaultSize, setDefaultSize] = useState({ width: 800, height: 600 });
  const doc = useSelector((state: RootState) => state.taskbar.taskbarIcons.find(icon => icon.id === type));
  const dispatch = useDispatch();




  return (
    <section className='relative hidden'>
      <Modal
        centered
        open={doc?.isOpen}
        footer={false}
        closable={false}
        maskClosable={false}
        width={doc?.isMaximized ? '100%' : doc?.isMinimized ? '150px' : defaultSize.width}
        styles={{ body: { height: doc?.isMaximized ? '94dvh' : doc?.isMinimized ? '100px' : defaultSize.height } }}
        onCancel={() => dispatch(removeTaskbarIcon({ id: type }))}
        className={`!relative !overflow-hidden !rounded-lg`}
      >
        <ModalHeader title={title} id={id} isMinimized={doc?.isMinimized!} />
        <main className={`absolute left-0 top-10 w-full h-full ${doc?.isMinimized ? 'hidden' : ''}`} >
          {children}
        </main>
      </Modal>
    </section>
  );
}

