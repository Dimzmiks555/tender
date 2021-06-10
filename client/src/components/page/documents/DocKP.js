import React from 'react';
import crypt from './crypt.png'
import stamp from './stamp.jpg'
import logo from './LOGO.jpg'
import './DocKP.css'

export default class DocKP extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: {}
        }
      }


    componentDidMount() {
        fetch(`http://127.0.0.1:5000/api/tenders/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(
            (result) => {
            try {
                this.setState({
                    isLoaded: true,
                    data: result
                });
            } catch (error) {
                <h2>Нет доступа к API</h2>
            }
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
        
    }

        /**
     * Возвращает сумму прописью
     */
    number_to_string (num) {
        /**
         * Преобразует строку в массив
         */
        function str_split(string, length) {
            var chunks, len, pos;
            
            string = (string == null) ? "" : string;
            length =  (length == null) ? 1 : length;
            
            var chunks = [];
            var pos = 0;
            var len = string.length;
            while (pos < len) {
                chunks.push(string.slice(pos, pos += length));
            }
            
            return chunks;
        };
        /**
         * Склоняем словоформу
         */
        function morph(number, titles) {
            var cases = [2, 0, 1, 1, 1, 2];
            return titles[ (number>4 && number<20)? 2 : cases[Math.min(number, 5)] ];
        };
        var def_translite = {
            null: 'ноль',
            a1: ['один','два','три','четыре','пять','шесть','семь','восемь','девять'],
            a2: ['одна','две','три','четыре','пять','шесть','семь','восемь','девять'],
            a10: ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'],
            a20: ['двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'],
            a100: ['сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'],
            uc: ['копейка', 'копейки', 'копеек'],
            ur: ['рубль', 'рубля', 'рублей'],
            u3: ['тысяча', 'тысячи', 'тысяч'],
            u2: ['миллион', 'миллиона', 'миллионов'],
            u1: ['миллиард', 'миллиарда', 'миллиардов'],
        }
    var i1, i2, i3, kop, out, rub, v, zeros, _ref, _ref1, _ref2, ax;

    _ref = parseFloat(num).toFixed(2).split('.');
    rub = _ref[0];
    kop = _ref[1];
    var leading_zeros = 12 - rub.length;
    if (leading_zeros < 0) {
        return false;
    }

    var zeros = [];
    while (leading_zeros--) {
        zeros.push('0');
    }
    rub = zeros.join('') + rub;
    var out = ['('];
    if (rub > 0) {
        // Разбиваем число по три символа
        _ref1 = str_split(rub, 3);
        for (var i = -1; i < _ref1.length;i++) {
            v = _ref1[i];
            if (!(v > 0)) continue;
            _ref2 = str_split(v, 1); i1 = parseInt(_ref2[0]); i2 = parseInt(_ref2[1]); i3 = parseInt(_ref2[2]);
            out.push(def_translite.a100[i1-1]); // 1xx-9xx
            ax = (i+1 == 3) ? 'a2' : 'a1';
            if (i2 > 1) {
                out.push(def_translite.a20[i2-2] + (i3 > 0 ?  ' ' + def_translite[ax][i3-1] : '')); // 20-99
            } else {
                out.push(i2 > 0 ? def_translite.a10[i3] : def_translite[ax][i3-1]); // 10-19 | 1-9
            }
            
            if (_ref1.length > i+1){
                var name = def_translite['u'+(i+1)];
                out.push(morph(v,name));
            }
        }
    } else {
        out.push( def_translite.null);
    }
    out.push(')')
    // Дописываем название "рубли"
    out.push(morph(rub, def_translite.ur));
    // Дописываем название "копейка"
    out.push(kop + ' ' + morph(kop, def_translite.uc));

    // Объединяем маcсив в строку, удаляем лишние пробелы и возвращаем результат
    return out.join(' ').replace(RegExp(' {2,}', 'g'), ' ').trimLeft();
    };

    render(){

        let date = new Date().toLocaleDateString();
        const {error, isLoaded, data} = this.state;
        
        let total = null;
        return (
            <div className="document">
                <div className="pagea4">
                    <div className="pagea4__header">
                        <img src={logo}></img>
                        <div className="pagea4__req">
                            <p>Российская Федерация Воронежской область, Лискинский район, город Лиски</p>
                            <p> ИП Аветикян Липарит Ашотович </p>
                            <p>ИНН 365233175954 , ОГРН 309365205600058</p>
                            <p>Юридический адрес: 397909, Воронежская область,</p>
                            <p>Российская Федерация Воронежской область, Лискинский район, город Лиски</p>
                            <p>Лискинский район, г. Лиски, ул. Горная, д.59</p>		
                            <p>БИК 04200768, р/сч 40802810113000022883</p>	
                            <p>в Центрально-Черноземном банке ПАО Сбербанк г. Воронеж</p>	
                            <p> e-mail :masnagetto@gmail.com,stroitel.office@gmail.com</p>	
                            <p>т. +7(908)1450292</p>		
                        </div>
                    </div>
                    <div className="pagea4__title">
                        <p>Исх. №34 от {date}</p>
                        <div className="pagea4__gifter">
                            <p>Открытому акционерному обществу</p>
                            <p>"Группа Черкизово"</p>
                        </div>
                    </div>
                    <div className="pagea4__maintitle">
                        <h2>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2>
                    </div>
                    <table border="1" cellpadding="5px">
                        <tr>
                            <td>№</td> 
                            <td>Наименование </td> 
                            <td>Ед. изм</td>
                            <td>Кол-во</td>
                            <td>Стоимость единицы, руб. без НДС</td>
                            <td>Сроки поставки (к.д.)</td>
                            <td>Комментарий к позиции</td>
                            <td>Общая стоимость, руб. без НДС</td>
                        </tr>
                        {
                            data?.pos?.map((row, index) => {
                                total += Number((row.price * row.amount).toFixed(2))
                                if (index == data?.pos.lenght - 2) {
                                    return row.analog_name != '' ? (
                                        <>
                                        <div className="break"></div>
                                        <tr>
                                            <td>{row.number}</td> 
                                            <td>{row.analog_name}</td> 
                                            <td>{row.edism}</td>
                                            <td>{row.amount}</td>
                                            <td>{Number(row.price).toFixed(2)}</td>
                                            <td>30</td>
                                            <td></td>
                                            <td>{(row.price * row.amount).toFixed(2)}</td>
                                        </tr>
                                        </>
                                    )
                                    : null
                                } else {
                                    return row.analog_name != '' ? (
                                        <tr>
                                            <td>{row.number}</td> 
                                            <td>{row.analog_name}</td> 
                                            <td>{row.edism}</td>
                                            <td>{row.amount}</td>
                                            <td>{Number(row.price).toFixed(2)}</td>
                                            <td>30</td>
                                            <td></td>
                                            <td>{(row.price * row.amount).toFixed(2)}</td>
                                        </tr>
                                    )
                                    : null
                                }
                            })
                        }
                        <tr>
                            <td colspan="7">Итого</td> 
                            <td>{total?.toFixed(2)}</td>
                        </tr>
                    </table>
                    
                    <footer>
                        
                        <div className="total__string">
                            <b>Итого: {total?.toFixed(0) } {this.number_to_string(total?.toFixed(2))}.</b>
                            <p><b>Без НДС.</b></p>
                        </div>
                        <div className="pagea4__footer">
                            <div className="pagea4__info">
                                <p>Срок поставки 30 дней.</p>
                                <p>Отсрочка платежа 30 дней.</p>
                            </div>
                            <div className="pagea4__crypt">
                                Подпись <img src={crypt}></img>
                            </div>
                            <div className="pagea4__stamp">
                                М.П <img src={stamp}></img>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}