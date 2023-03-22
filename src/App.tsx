import { useState } from "react";
import { Rnd } from "react-rnd";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const App = () => {
  const generageUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(a) {
      let r = (new Date().getTime() + Math.random() * 16)%16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
  }

  const [keys, setKeys] = useState([generageUUID()]);

  const addComponent = () => {
    setKeys(prev => ([
      ...prev,
      generageUUID(),
    ]));
  };

  const deleteComponent = (deleteKey: string) => {
    setKeys(prev => prev.filter(key => key !== deleteKey));
  }

  return (
    <>
      <div style={{ height: '90%', margin: '10px', border: '1px solid black' }}>
        {keys.map(key => (
          <Rnd
            key={key}
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
            style={{ border: '1px solid black' }}
            dragHandleClassName={'drag'}
            resizeGrid={[50, 50]}
            dragGrid={[50, 50]}
            enableResizing={{ bottomRight: true }}
            bounds={'parent'}
          >
            <div className="drag" style={{ border: '1px, solid black', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ cursor: 'move', width: '100%' }}>Draggable area</div>
              <div style={{ cursor: 'pointer' }} onClick={() => deleteComponent(key)}>×</div>
            </div>
            <hr />
            <div>ドラッグとリサイズ可能なコンポーネントです</div>
          </Rnd>

        ))}
      </div>
      <Button variant={'contained'} onClick={addComponent} color={'primary'} sx={{ position: 'absolute', bottom: '70px', right: '30px', borderRadius: '50%', width: '60px', height: '60px' }}>
        <AddIcon sx={{ fontSize: 'xx-large' }} />
      </Button>
    </>
  );
}
