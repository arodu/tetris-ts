'use strict';

export default class View{
  
  protected color = (id:number):any => {
    let colors:any = {
      0: { blocked: '#666666' },
      1: { active:'#AA00FF', blocked:'#AA00FF' },
      2: { active:'#FFA500', blocked:'#FFA500' },
      3: { active:'#0000FF', blocked:'#0000FF' },
      4: { active:'#FFFF00', blocked:'#FFFF00' },
      5: { active:'#00FF00', blocked:'#00FF00' },
      6: { active:'#FF0000', blocked:'#FF0000' },
      7: { active:'#00FFFF', blocked:'#00FFFF' },
    }
    return colors[id];
  
  }
}