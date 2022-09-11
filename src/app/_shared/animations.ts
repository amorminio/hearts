import { animate, state, style, transition, trigger } from "@angular/animations";


export const animations = [

	trigger('cardHover',[

        state('select',style({
            transform: 'translateY(-35px)',
        })),
  
        state('cancel',style({
            transform: 'translateY(0px)',
        })),

        transition('* => *', [ animate('200ms') ]),
          
    ]),
	
]