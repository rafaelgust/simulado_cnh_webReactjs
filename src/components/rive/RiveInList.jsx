import Rive from 'rive-react';
import RV1 from '../../rive/1.riv';
import RV2 from '../../rive/2.riv';
import RV3 from '../../rive/3.riv';
import RV4 from '../../rive/4.riv';
import RV5 from '../../rive/5.riv';
import RV6 from '../../rive/6.riv';
import RV7 from '../../rive/7.riv';

function RiveInList({type}) {
    function checkType(type){
        if(type === 1){return RV1}
        else if(type === 2){return RV2}
        else if(type === 3){return RV3}
        else if(type === 4){return RV4}
        else if(type === 5){return RV5}
        else if(type === 6){return RV6}
        else if(type === 7){return RV7}
    }

  return (
      <div style={{width: 100, height: 100, margin: 25}}>
          <Rive src={checkType(type)} />
      </div>
  );
}

export default RiveInList;