import {compose, filter, map, propEq, reject, isNil, identity} from 'ramda';
import {newDate} from './dateUtils';
import i18n from '../i18n';

const benefits = [
    {
        type: 'personal',
        ID: 'AE_230_mensual',
        name: 'AE_230_mensual_title',
        periode: 'mes',
        amountText: 'maxim_6_mesos',
        url: 'link_AE_230',
        from: newDate(2021, 6, 1),
        to: newDate(2021, 12, 31)
    },
    {
        type: 'personal',
        ID: 'AE_230_01_mensual',
        name: 'AE_230_01_mensual_title',
        periode: 'any',
        url: 'link_AE_230',
        from: newDate(2019, 4, 25),
        to: newDate(2019, 5, 24)
    },
    {
        type: 'personal',
        ID: 'EG_233_mensual',
        name: 'EG_233_mensual_title',
        amountText: 'EG_233_mensual_amount',
        url: 'link_EG_233',
        from: newDate(2021, 9, 6),
        to: newDate(2021, 9, 17)
    },
    {
        type: 'personal',
        ID: 'TA_01_00_00',
        name: 'TA_01_00_00_title',
        amountText: 'TA_01_00_00_amount',
        url: 'link_TA_01_00_00',
    },
    {
        type: 'personal',
        ID: 'TA_02_00_00',
        name: 'TA_02_00_00_title',
        amountText: 'TA_02_00_00_amount',
        url: 'link_TA_02_00_00',
    },
    {
        type: 'personal',
        ID: 'GE_051_04_mensual',
        name: 'GE_051_04_mensual_title',
        periode: 'mes',
        url: 'link_GE_051',
    },
    {
        type: 'personal',
        ID: 'GE_051_01_mensual',
        name: 'GE_051_01_mensual_title',
        periode: 'mes',
        url: 'link_GE_051',
    },
    {
        type: 'personal',
        ID: 'GE_051_02_mensual',
        name: 'GE_051_02_mensual_title',
        periode: 'mes',
        url: 'link_GE_051',
    },
    {
        type: 'personal',
        ID: 'GE_051_03_mensual',
        name: 'GE_051_03_mensual_title',
        periode: 'mes',
        url: 'link_GE_051',
    },
    {
        type: 'personal',
        ID: 'GG_270_mensual',
        name: 'GG_270_mensual_title',
        amountText: 'GG_270_import',
        url: 'link_GG_270',
    },
    {
        type: 'personal',
        ID: 'GA_246_01',
        name: 'GA_246_01_title',
        url: 'link_GA_246',
        amountText: 'GA_246_01_import',
    },
    {
        type: 'personal',
        ID: 'GA_246_02',
        name: 'GA_246_02_title',
        url: 'link_GA_246',
        amountText: 'GA_246_02_import',
    },
    {
        type: 'personal',
        ID: 'GA_234_01',
        name: 'GA_234_01_title',
        url: 'link_GA_234',
        amountText: 'GA_234_01_import',
    },
    {
        type: 'personal',
        ID: 'GA_234_02',
        name: 'GA_234_02_title',
        url: 'link_GA_234',
        amountText: 'GA_234_02_import',
    },
    {
        type: 'housing',
        ID: 'HA_077_01',
        name: 'HA_077_01_title',
        url: 'link_HA_077_01',
        amountText: 'HA_077_01_import',
        conditions: 'maxim_12_mesos',
        from: newDate(2019, 2, 20),
        to: newDate(2019, 12, 5)
    },
    {
        type: 'housing',
        ID: 'HG_077_02',
        name: 'HG_077_02_title',
        amountText: 'HG_077_02_import',
        conditions: 'maxim_12_mesos',
        url: 'link_HG_077_02',
    },
    {
        type: 'housing',
        ID: 'HG_077_03',
        name: 'HG_077_03_title',
        amountText: 'HG_077_03_import',
        conditions: 'pagament_unic',
        url: 'link_HG_077_03',
    },
    {
        type: 'housing',
        ID: 'HG_077_04',
        name: 'HG_077_04_title',
        amountText: 'HG_077_04_import',
        conditions: 'pagament_unic',
        url: 'link_HG_077_04',
    },
    {
        type: 'housing',
        ID: 'HG_077_04_01',
        name: 'HG_077_04_01_title',
        amountText: 'HG_077_04_01_import',
        conditions: 'maxim_12_mesos',
        url: 'link_HG_077_04',
    },
    {
        type: 'housing',
        ID: 'HE_077_00',
        name: 'HE_077_00_title',
        amountText: 'HE_077_00_import',
        conditions: 'maxim_12_mesos',
        url: 'link_HE_077_00',
        from: newDate(2021, 4, 27),
        to: newDate(2021, 6, 11)
    },
    {
        type: 'housing',
        ID: 'HE_02_01_00',
        name: 'HE_02_01_00_title',
        url: 'link_HE_02_01_00',
        amountText: 'HE_02_01_00_import',
        to: newDate(2021, 4, 30)
    },
    {
        type: 'housing',
        ID: 'HG_02_00_00',
        name: 'HG_02_00_00_title',
        url: 'link_HG_02_00_00',
        amountText: 'HG_02_00_00_import',
        conditions: 'maxim_12_mesos',
    }
];

const translate = ({ name, amountText, conditions, periode, ...rest }) => ({
    name: i18n.t(name),
    amountText: i18n.t(amountText),
    periode: i18n.t(periode),
    conditions: i18n.t(conditions),
    ...rest,
});

export const getBenefits = (type) => compose(
    map(reject(isNil)),
    map(translate),
    type ? filter(propEq('type', type)) : identity,
)(benefits);
