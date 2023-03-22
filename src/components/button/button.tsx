import React from 'react';

export type ButtonProps = {

    /**
     * Текст кнопки
     */
    text?: React.ReactNode;

    /**
     * Иконка кнопки
     */
    icon?: React.ReactNode;

    /**
     * Список произвольных элементов в левом слоте
     */
    rightAddons?: React.ReactNode;

    /**
     * Список произвольных элементов в правом слоте
     */
    leftAddons?: React.ReactNode;

    /**
     * Тип кнопки
     * @default 'default'
     */
    view?: 'default' | 'action' | 'extra' | 'rounded';

    /**
     * Поведение кнопки
     */
    type?: 'button' | 'reset' | 'submit';

    /**
     * HTML элемент, которым будет компонент в DOM
     */
    tag?: 'button' | 'span';

    /**
     * Управление шириной кнопки. При значении 'available' растягивает кнопку на ширину родителя
     */
    width?: 'default' | 'available';

    /**
     * Размер компонента
     */
    size?: 's' | 'm' | 'l' | 'xl';

    /**
     * Управление возможности взаимодействия с компонентом
     */
    disabled?: boolean;

    /**
     * Отображение кнопки в состоянии фокуса
     */
    focused?: boolean;

    /**
     * Псевдо представление кнопки
     */
    pseudo?: boolean;

    /**
     * Идентификатор компонента в DOM
     */
    id?: string;

    /**
     * Отключает валидацию полей формы, у которых есть атрибут pattern
     */
    formNoValidate?: boolean;

    /**
     * Имя компонента в DOM
     */
    name?: string;

    /**
     * Текст всплывающей подсказки
     */
    title?: string;

    /**
     * Последовательность перехода между контролами при нажатии на Tab
     */
    tabIndex?: number;

    /**
     * Тип переключателя
     */
    togglable?: 'check' | 'radio';

    /**
     * Отображение кнопки в отмеченном (зажатом) состоянии
     */
    checked?: boolean;

    /**
     * Дочерние элементы `Button`
     */
    children?: React.ReactNode;

    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    'data-test-id'?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик клика по кнопке
     */
    onClick?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик фокуса кнопки
     */
    onFocus?: (event?: React.FocusEvent<any>) => void;

    /**
     * Обработчик снятия фокуса кнопки
     */
    onBlur?: (event?: React.FocusEvent<any>) => void;

    /**
     * Обработчик события наведения курсора на кнопку
     */
    onMouseEnter?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик события снятия курсора с кнопки
     */
    onMouseLeave?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик события нажатия кнопки мыши в момент
     */
    onMouseDown?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик события отжатия кнопки мыши в момент
     */
    onMouseUp?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик события отведения курсора с кнопки
     */
    onMouseOut?: (event?: React.MouseEvent<any>) => void;

    /**
     * Обработчик события нажатия на клавишу клавиатуры в момент, когда фокус находится на компоненте
     */
    onKeyDown?: (event?: React.KeyboardEvent<any>) => void;

    /**
     * Обработчик события отжатия на клавишу клавиатуры в момент, когда фокус находится на компоненте
     */
    onKeyUp?: (event?: React.KeyboardEvent<any>) => void;

};