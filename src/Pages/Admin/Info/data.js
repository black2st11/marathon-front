import { colorPalette } from '../../../config'
import { inputTextProps, } from '../../common'

export const infoProps = {
    name: {
        type: 'input',
        name: 'name',
        text: {
            ...inputTextProps,
            children: '이름'
        },
        input: {
            name: 'name',
        },
    },
    duration: {
        type: 'input',
        name: 'duration',
        text: {
            ...inputTextProps,
            children: '기간'
        },
        sep: true,
        inputs: [{
            name: 'started',
        },
        {
            name: 'ended',
        }]
    },
    button: {
        text: {
            children: '저장',
            color: colorPalette.white
        }
    },
    availableList: ['name', 'duration']
}