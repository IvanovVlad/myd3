import {SimulationLinkDatum, SimulationNodeDatum} from "d3";

export interface Address {
  zip_code?: string;
  region_code?: string;
  region_type?: string;
  region_name?: string;
  city_type?: string;
  city_name?: string;
  district_type?: string;
  district_name?: string;
  place_type?: string;
  place_name?: string;
  street_type?: string;
  street_name?: string;
  house?: string;
  building?: string;
  flat?: string;
}

export interface GraphNodePerson {
  id: string;
  type: "person";
  inn: string | null;
  name: string;
  name_obj: {
    lastname: string;
    firstname: string;
    secondname: string;
  };
  roles?: Array<{
    name: string;
    first_seen: string;
    last_seen: string | null;
    archived: boolean;
  }>;
}

export interface GraphNodeOrganisation {
  id: string;
  type: "organisation";
  inn: string;
  ogrn: string;
  name: string;
  okved?: {
    code: string | null;
    name: string | null;
  };
  address: Address;
  born: string;
  death: null | {
    date: string;
    cause?: string;
  };
  status: null | {
    code: string;
    date?: string;
    cause?: string;
  };
}

export declare type GraphNode = GraphNodePerson | GraphNodeOrganisation;

export interface GraphNodeWrapper extends SimulationNodeDatum {
  payload: GraphNode;
}

export interface GraphLink extends SimulationLinkDatum<any> {
  roles: Array<{
    name: string;
    first_seen: string;
    last_seen: string | null;
    archived: boolean;
  }>;
}

export interface GraphState {
  nodes: GraphNodeWrapper[];
  links: GraphLink[];
}

export const graphIrbis: GraphState = {
  nodes: [
    {
      payload: {
        id: "cf65893d-51e1-5e64-848b-49c1ec26e251",
        inn: "1832051249",
        born: "2006-11-13",
        name: 'ООО "ИРБИС АНАЛИТИКА"',
        ogrn: "1061832016630",
        type: "organisation",
        death: null,
        okved: {
          code: "62.0",
          name: "Разработка компьютерного программного обеспечения, консультационные услуги в данной области и другие сопутствующие услуги",
        },
        status: null,
        address: {
          flat: "КВ.3",
          house: "Д.267",
          building: "К.2",
          zip_code: "426011",
          city_name: "ИЖЕВСК",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "УДМУРТСКАЯ",
          street_type: "УЛ.",
        },
      },
      index: 0,
      x: 74.87529798377497,
      y: 535.0792416327417,
      vy: -3.213485944810882,
      vx: -8.794829617780254,
    },
    {
      payload: {
        id: "6a2de00a-f1d3-5ac2-95d3-029adae6faae",
        inn: "183208397731",
        name: "ГОРДИЙЧУК ПАВЕЛ ВЛАДИМИРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ГОРДИЙЧУК",
          firstname: "ПАВЕЛ",
          secondname: "ВЛАДИМИРОВИЧ",
        },
      },
      index: 1,
      x: -464.1032226589863,
      y: 687.9087726876376,
      vy: -4.719762850529999,
      vx: -8.671838309158296,
    },
    {
      payload: {
        id: "9a435235-91bb-5789-b232-973b5d2bddef",
        inn: "183100072791",
        name: "ПОТМАНЦЕВ ИГОРЬ ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ПОТМАНЦЕВ",
          firstname: "ИГОРЬ",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 2,
      x: -18.599109386754918,
      y: 1292.1078298754956,
      vy: -3.432359594752839,
      vx: -8.765620767530068,
    },
    {
      payload: {
        id: "a1c9fb5a-ed34-528a-a257-88e3a3c26e20",
        inn: "183307512079",
        name: "РАЗБАКОВ АНДРЕЙ ГЕННАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "РАЗБАКОВ",
          firstname: "АНДРЕЙ",
          secondname: "ГЕННАДЬЕВИЧ",
        },
      },
      index: 3,
      x: 462.901238841286,
      y: 976.9994554952617,
      vy: -3.8062059522390843,
      vx: -9.893919471363398,
    },
    {
      payload: {
        id: "a546bbe9-3a17-543d-9444-be174135a1f2",
        inn: "183210308979",
        name: "ЕФРЕМОВ МАКСИМ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЕФРЕМОВ",
          firstname: "МАКСИМ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 4,
      x: 666.2523820906611,
      y: 634.7407940360777,
      vy: -3.3011072643235044,
      vx: -9.994289106857694,
    },
    {
      payload: {
        id: "b1d2a8a2-c8bd-5081-ac97-64e81e5fa3c3",
        inn: "183210308802",
        name: "ГОРДИЙЧУК ТАРАС ВЛАДИМИРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ГОРДИЙЧУК",
          firstname: "ТАРАС",
          secondname: "ВЛАДИМИРОВИЧ",
        },
      },
      index: 5,
      x: 562.0008292368444,
      y: 233.0634967484943,
      vy: -2.868275070111535,
      vx: -9.719990296668692,
    },
    {
      payload: {
        id: "cfa88ad0-2cb1-553c-bc53-3a91e9d23e75",
        inn: "183211454002",
        name: "ГАБИДУЛЛИН МАРАТ САЛИМУЛЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ГАБИДУЛЛИН",
          firstname: "МАРАТ",
          secondname: "САЛИМУЛЛОВИЧ",
        },
      },
      index: 6,
      x: -2.3871406744787333,
      y: -198.42558661229663,
      vy: -4.091908445194569,
      vx: -4.4486914473119805,
    },
    {
      payload: {
        id: "3f6d4a15-9e01-5470-96e6-28480c1517ca",
        inn: "1831177672",
        born: "2016-01-15",
        name: 'ООО "ГРАНИТ ПЛЮС"',
        ogrn: "1161832051402",
        type: "organisation",
        death: null,
        okved: {
          code: "82.91",
          name: "Деятельность агентств по сбору платежей и бюро кредитной информации",
        },
        status: null,
        address: {
          flat: "ОФИС 1",
          house: "Д. 39",
          zip_code: "427627",
          city_name: "ГЛАЗОВ",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "ЮКАМЕНСКАЯ",
          street_type: "УЛ.",
        },
      },
      index: 7,
      x: -64.74404310645647,
      y: -925.2465910370541,
      vy: -5.336135657862687,
      vx: 0.9005860924637671,
    },
    {
      payload: {
        id: "86a42213-4ec1-5648-ba2a-14a720cfe68e",
        inn: "182908968523",
        name: "БЕЛЯЕВ ГРИГОРИЙ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БЕЛЯЕВ",
          firstname: "ГРИГОРИЙ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 8,
      x: -102.72332600716034,
      y: -1641.2995685638384,
      vy: -6.052236071734161,
      vx: 6.585948343824355,
    },
    {
      payload: {
        id: "c7d5ebaa-095e-563e-b06a-7481d6edea1c",
        inn: "180500719781",
        name: "БИЯНОВ ВИТАЛИЙ ЮРЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БИЯНОВ",
          firstname: "ВИТАЛИЙ",
          secondname: "ЮРЬЕВИЧ",
        },
      },
      index: 9,
      x: -622.1893466119482,
      y: -1044.031060634779,
      vy: -9.523970706523558,
      vx: 2.641969639460132,
    },
    {
      payload: {
        id: "11c968a3-7eb6-5317-8b8b-9e5d1da2e2bc",
        inn: "1831192906",
        born: "2019-01-16",
        name: 'ООО "ДЭЛЕТ"',
        ogrn: "1191832000480",
        type: "organisation",
        death: null,
        okved: {
          code: "64.19",
          name: "Денежное посредничество прочее",
        },
        status: null,
        address: {
          flat: "ОФИС 2",
          house: "Д. 107А",
          zip_code: "427145",
          place_name: "ИГРА",
          place_type: "П",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "СОВЕТСКАЯ",
          street_type: "УЛ.",
        },
      },
      index: 10,
      x: 37.78161796998491,
      y: -2183.488885209168,
      vy: -4.825176781567073,
      vx: 10.404751211241386,
    },
    {
      payload: {
        id: "88c51c35-9efb-58b8-aafd-cbf0eaf99785",
        inn: "1837002781",
        born: "2007-05-28",
        name: 'ООО "АТОН"',
        ogrn: "1071837000476",
        type: "organisation",
        death: {
          date: "2009-04-15",
          cause: "Ликвидация юридического лица",
        },
        okved: {
          code: "51.53",
          name: "Оптовая торговля лесоматериалами, строительными материалами и санитарно-техническим оборудованием",
        },
        status: null,
        address: {
          house: "Д.39",
          zip_code: "427627",
          city_name: "ГЛАЗОВ",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "ЮКАМЕНСКАЯ",
          street_type: "УЛ.",
        },
      },
      index: 11,
      x: -512.2890159882653,
      y: -2042.2877081776105,
      vy: -8.794671897966925,
      vx: 10.062985365922033,
    },
    {
      payload: {
        id: "5dc6f4eb-83fa-51fc-b696-9d371f8d82be",
        inn: "1832148642",
        born: "2018-03-26",
        name: 'ООО "ЮРКОНСАЛТ"',
        ogrn: "1181832007356",
        type: "organisation",
        death: {
          date: "2021-11-22",
          cause: "Ликвидация юридического лица",
        },
        okved: {
          code: "69.10",
          name: "Деятельность в области права",
        },
        status: null,
        address: {
          flat: "КВ. 70",
          house: "Д. 61",
          zip_code: "426006",
          city_name: "ИЖЕВСК",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "БАРАНОВА",
          street_type: "УЛ.",
        },
      },
      index: 12,
      x: 226.14131668846346,
      y: 1815.1950372389554,
      vy: -4.142401434172495,
      vx: -7.92856100148658,
    },
    {
      payload: {
        id: "feff0e9d-55bd-5e2a-bacf-5c4cc59c98a1",
        inn: "1831168212",
        born: "2014-08-27",
        name: 'ООО МКК "МАЯК ФИНАНС"',
        ogrn: "1141831003984",
        type: "organisation",
        death: {
          date: "2020-09-17",
          cause:
            "Исключение из ЕГРЮЛ юридического лица в связи наличием в ЕГРЮЛ сведений о нем, в отношении которых внесена запись о недостоверности",
        },
        okved: {
          code: "64.19",
          name: "Денежное посредничество прочее",
        },
        status: null,
        address: {
          flat: "КВ. 91",
          house: "Д. 20",
          zip_code: "426009",
          city_name: "ИЖЕВСК",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "ПАРКОВАЯ",
          street_type: "УЛ.",
        },
      },
      index: 13,
      x: -287.9543512455197,
      y: 1792.5680998323658,
      vy: -3.008975015927617,
      vx: -7.4153735033100086,
    },
  ],
  links: [
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2018-04-06T00:00:00",
        },
      ],
      source: "6a2de00a-f1d3-5ac2-95d3-029adae6faae",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2020-06-08T00:00:00",
        },
      ],
      source: "9a435235-91bb-5789-b232-973b5d2bddef",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2018-04-06T00:00:00",
        },
      ],
      source: "a1c9fb5a-ed34-528a-a257-88e3a3c26e20",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2018-04-06T00:00:00",
        },
      ],
      source: "a546bbe9-3a17-543d-9444-be174135a1f2",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2018-04-06T00:00:00",
        },
      ],
      source: "b1d2a8a2-c8bd-5081-ac97-64e81e5fa3c3",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-11-05T00:00:00",
          first_seen: "2014-05-08T00:00:00",
        },
        {
          name: "УПРАВЛЯЮЩИЙ - ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ",
          archived: true,
          last_seen: "2020-06-08T00:00:00",
          first_seen: "2019-03-05T00:00:00",
        },
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: true,
          last_seen: "2018-04-06T00:00:00",
          first_seen: "2014-05-08T00:00:00",
        },
      ],
      source: "cfa88ad0-2cb1-553c-bc53-3a91e9d23e75",
      target: "cf65893d-51e1-5e64-848b-49c1ec26e251",
    },
    {
      roles: [
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: true,
          last_seen: "2019-10-08T00:00:00",
          first_seen: "2016-01-26T00:00:00",
        },
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2019-10-08T00:00:00",
          first_seen: "2016-01-26T00:00:00",
        },
      ],
      source: "cfa88ad0-2cb1-553c-bc53-3a91e9d23e75",
      target: "3f6d4a15-9e01-5470-96e6-28480c1517ca",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2019-10-17T00:00:00",
        },
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2019-10-17T00:00:00",
        },
      ],
      source: "86a42213-4ec1-5648-ba2a-14a720cfe68e",
      target: "3f6d4a15-9e01-5470-96e6-28480c1517ca",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2020-12-21T00:00:00",
        },
      ],
      source: "c7d5ebaa-095e-563e-b06a-7481d6edea1c",
      target: "3f6d4a15-9e01-5470-96e6-28480c1517ca",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2019-01-17T00:00:00",
        },
        {
          name: "ДИРЕКТОР",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2019-01-17T00:00:00",
        },
      ],
      source: "86a42213-4ec1-5648-ba2a-14a720cfe68e",
      target: "11c968a3-7eb6-5317-8b8b-9e5d1da2e2bc",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-01-02T00:00:00",
          first_seen: "2014-05-09T00:00:00",
        },
      ],
      source: "86a42213-4ec1-5648-ba2a-14a720cfe68e",
      target: "88c51c35-9efb-58b8-aafd-cbf0eaf99785",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2018-04-02T00:00:00",
          first_seen: "2018-03-27T00:00:00",
        },
      ],
      source: "9a435235-91bb-5789-b232-973b5d2bddef",
      target: "5dc6f4eb-83fa-51fc-b696-9d371f8d82be",
    },
    {
      roles: [
        {
          name: "ДИРЕКТОР",
          archived: true,
          last_seen: "2015-11-17T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2016-07-21T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "9a435235-91bb-5789-b232-973b5d2bddef",
      target: "feff0e9d-55bd-5e2a-bacf-5c4cc59c98a1",
    },
  ],
};

export const graphData: GraphState = {
  nodes: [
    {
      payload: {
        id: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
        inn: "1805019020",
        born: "1997-05-14",
        name: 'АО "ЧЕПЦА"',
        ogrn: "1021801099484",
        type: "organisation",
        death: null,
        okved: {
          code: "41.20",
          name: "Строительство жилых и нежилых зданий",
        },
        status: {
          code: "117",
          date: "2018-12-17",
          cause:
            "Юридическое лицо признано несостоятельным (банкротом) и в отношении него открыто конкурсное производство",
        },
        address: {
          house: "Д. 11",
          zip_code: "427627",
          city_name: "ГЛАЗОВ",
          city_type: "Г.",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "ДРАГУНОВА",
          street_type: "УЛ.",
        },
      },
      index: 0,
      x: -2803.87348057873,
      y: 89.64767409720702,
      vy: -12.549397599929069,
      vx: -15.746288648344567,
    },
    {
      payload: {
        id: "005d1541-99e5-5517-9a33-c004478420b9",
        inn: "",
        name: "БАЖЕНОВА МАРГАРИТА АЛЕКСАНДРОВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "МАРГАРИТА",
          secondname: "АЛЕКСАНДРОВНА",
        },
      },
      index: 1,
      x: -1807.23076927888,
      y: 727.9494627494443,
      vy: -20.343034715325544,
      vx: -16.12735894773983,
    },
    {
      payload: {
        id: "0527549e-ac33-5538-8ab0-738f9265e426",
        inn: "182902946964",
        name: "АБАШЕВА МАГСУМА НАЗИПОВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "МАГСУМА",
          secondname: "НАЗИПОВНА",
        },
      },
      index: 2,
      x: -2169.776365143193,
      y: -680.7712235552359,
      vy: -13.02778615169102,
      vx: -20.253024848697308,
    },
    {
      payload: {
        id: "0863c8aa-29ce-5852-86ec-f0188d73f4a9",
        inn: "182709860250",
        name: "ПОСКИН АЛЕКСЕЙ ЕВГЕНЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ПОСКИН",
          firstname: "АЛЕКСЕЙ",
          secondname: "ЕВГЕНЬЕВИЧ",
        },
      },
      index: 3,
      x: -2650.2402672826997,
      y: -656.1383717606559,
      vy: -12.726954097451804,
      vx: -18.618604698401512,
    },
    {
      payload: {
        id: "16c38355-b9b7-52b9-9836-8c0020586b8d",
        inn: "182905354476",
        name: "АНТОНЕНКО ЗИНАИДА МИХАЙЛОВНА",
        type: "person",
        name_obj: {
          lastname: "АНТОНЕНКО",
          firstname: "ЗИНАИДА",
          secondname: "МИХАЙЛОВНА",
        },
      },
      index: 4,
      x: -2446.7960417254358,
      y: -668.096825506779,
      vy: -18.341431047251096,
      vx: -18.719521268371864,
    },
    {
      payload: {
        id: "1c491eb6-de27-58d1-9b07-210c8e94702e",
        inn: "183109500280",
        name: "ШМЫКОВ НИКОЛАЙ ГЕОРГИЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ШМЫКОВ",
          firstname: "НИКОЛАЙ",
          secondname: "ГЕОРГИЕВИЧ",
        },
      },
      index: 5,
      x: -2478.2387435695846,
      y: -442.09452929724284,
      vy: -14.043177023500055,
      vx: -11.119248552125573,
    },
    {
      payload: {
        id: "1f199fa6-ab25-5db2-9b3c-b2edfd571a0d",
        inn: "182902950336",
        name: "БОТАЛОВ АЛЕКСАНДР ВЕНИАМИНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОТАЛОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "ВЕНИАМИНОВИЧ",
        },
      },
      index: 6,
      x: -3317.744838424039,
      y: -274.40642260334505,
      vy: -10.884155524345873,
      vx: -10.188028832784546,
    },
    {
      payload: {
        id: "2186118b-aac2-5f98-bd35-7a03e25c3e93",
        inn: "182904455922",
        name: "АБАШЕВ ФАНИЛЬ ГАБДУЛЬБАРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "ФАНИЛЬ",
          secondname: "ГАБДУЛЬБАРОВИЧ",
        },
      },
      index: 7,
      x: -3401.825528572933,
      y: -855.0230251216132,
      vy: -9.183805790137368,
      vx: -12.159701383441336,
    },
    {
      payload: {
        id: "21d37c39-d42d-5583-8b22-98c71e1fc8cb",
        inn: "182904417998",
        name: "АБАШЕВ САДРТДИН ИБРАГИМОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "САДРТДИН",
          secondname: "ИБРАГИМОВИЧ",
        },
      },
      index: 8,
      x: -3611.7157917891936,
      y: -491.0706605970612,
      vy: -16.758010650810807,
      vx: -12.134719586350085,
    },
    {
      payload: {
        id: "27a8eba8-072a-5a71-9054-78ad3846655f",
        inn: "180501310494",
        name: "БАРЫШНИКОВ ЕВГЕНИЙ НИКАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАРЫШНИКОВ",
          firstname: "ЕВГЕНИЙ",
          secondname: "НИКАНДРОВИЧ",
        },
      },
      index: 9,
      x: -1860.4634100235753,
      y: 272.530463030582,
      vy: -14.606883058062866,
      vx: -14.031333272255246,
    },
    {
      payload: {
        id: "28800f45-3a0b-5292-9ced-6f145d360303",
        inn: "182902310223",
        name: "БАЖЕНОВ ВАСИЛИЙ ЛАВРЕНТЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "ВАСИЛИЙ",
          secondname: "ЛАВРЕНТЬЕВИЧ",
        },
      },
      index: 10,
      x: -3317.8712069174244,
      y: -1040.518553528984,
      vy: -13.139299838602577,
      vx: -13.044458941720967,
    },
    {
      payload: {
        id: "2a9ecc2e-a757-5937-99cc-87050bbf35e2",
        inn: "182902949394",
        name: "БАТАЛИНА ГАЛИНА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БАТАЛИНА",
          firstname: "ГАЛИНА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 11,
      x: -2214.9250117982056,
      y: -306.9173184270208,
      vy: -20.033902548413163,
      vx: -20.335540053137645,
    },
    {
      payload: {
        id: "2ac40c66-d980-5c58-928c-0da4ffca14a5",
        inn: "182902949073",
        name: "БАЙБОРОДОВ ЮРИЙ ИВАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЙБОРОДОВ",
          firstname: "ЮРИЙ",
          secondname: "ИВАНОВИЧ",
        },
      },
      index: 12,
      x: -3381.384988246842,
      y: -495.20069826332684,
      vy: -14.196108417474207,
      vx: -9.71397926770651,
    },
    {
      payload: {
        id: "2b8b8631-d96c-5f8b-84cf-face8480ca61",
        inn: "180500253613",
        name: "НАБОКОВ ВЛАДИМИР ФЕНЕДИМОВИЧ",
        type: "person",
        name_obj: {
          lastname: "НАБОКОВ",
          firstname: "ВЛАДИМИР",
          secondname: "ФЕНЕДИМОВИЧ",
        },
      },
      index: 13,
      x: -1673.5938449451905,
      y: 118.8069616836002,
      vy: -18.46047299993865,
      vx: -18.268999554666518,
    },
    {
      payload: {
        id: "2cdcefc3-fa30-5d70-be48-b008322a1fb5",
        inn: "182902948337",
        name: "БАЖЕНОВ АЛЕКСАНДР АЛЕКСЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "АЛЕКСЕЕВИЧ",
        },
      },
      index: 14,
      x: -2873.1539421837624,
      y: -545.0618505887443,
      vy: -8.935309731383306,
      vx: -14.755467927693793,
    },
    {
      payload: {
        id: "2e454dc8-5db0-59ab-bbb4-ef179db59941",
        inn: "182902948263",
        name: "АХМАДУЛЛИН РИМ ГУБАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АХМАДУЛЛИН",
          firstname: "РИМ",
          secondname: "ГУБАЕВИЧ",
        },
      },
      index: 15,
      x: -3273.910726604024,
      y: -686.2342907184197,
      vy: -16.845735596566126,
      vx: -18.010757228025454,
    },
    {
      payload: {
        id: "2f83c306-c916-5cb4-9ee6-c2a2ad81e9df",
        inn: "182906466905",
        name: "БАРЫШНИКОВ НЕСТЕР СТЕПАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАРЫШНИКОВ",
          firstname: "НЕСТЕР",
          secondname: "СТЕПАНОВИЧ",
        },
      },
      index: 16,
      x: -2370.170973498783,
      y: 1042.028781941088,
      vy: -15.75803844527986,
      vx: -16.962652628732343,
    },
    {
      payload: {
        id: "328bebef-589c-5e6e-8709-329120f05c3f",
        inn: "180501285505",
        name: "БОГДАНОВ АЛЕКСЕЙ ЕЛИЗАРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "ЕЛИЗАРОВИЧ",
        },
      },
      index: 17,
      x: -3125.5454628760695,
      y: -489.556820647472,
      vy: -9.681679067221813,
      vx: -7.560103714105809,
    },
    {
      payload: {
        id: "36939a17-d049-5230-8700-dc1287d03ba5",
        inn: "182902816806",
        name: "БУЛДАКОВА ЛЮДМИЛА ПАВЛОВНА",
        type: "person",
        name_obj: {
          lastname: "БУЛДАКОВА",
          firstname: "ЛЮДМИЛА",
          secondname: "ПАВЛОВНА",
        },
      },
      index: 18,
      x: -1805.9972250026435,
      y: -521.5552892341061,
      vy: -13.690867802513464,
      vx: -20.264909908113058,
    },
    {
      payload: {
        id: "3800d11b-c4b8-5513-b6f5-bbf76542e7ed",
        inn: "182903121123",
        name: "БАЖЕНОВА ЛЮДМИЛА ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "ЛЮДМИЛА",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 19,
      x: -2162.9222648536356,
      y: 76.53289705544347,
      vy: -20.463106954402708,
      vx: -16.443396409568695,
    },
    {
      payload: {
        id: "38df38c7-defa-5777-a13d-bad1540744a6",
        inn: "182902950262",
        name: "БОРОВИКОВА ТАТЬЯНА ЛЕОНТЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БОРОВИКОВА",
          firstname: "ТАТЬЯНА",
          secondname: "ЛЕОНТЬЕВНА",
        },
      },
      index: 20,
      x: -2138.7293789180703,
      y: -130.88625586752372,
      vy: -19.38669642839734,
      vx: -17.543657051995503,
    },
    {
      payload: {
        id: "3d82966c-85d1-5f91-9ae7-eb61292d50c6",
        inn: "182902949210",
        name: "БАКЛАНОВ АЛЕКСАНДР ФЕДОРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАКЛАНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "ФЕДОРОВИЧ",
        },
      },
      index: 21,
      x: -2362.92039279015,
      y: 817.9706093600304,
      vy: -9.829889086558252,
      vx: -12.271232033435409,
    },
    {
      payload: {
        id: "3daa17e3-d4c4-5fb0-b467-91a4b301acf0",
        inn: "182905225907",
        name: "АБАШЕВА МАВЛИЯ АХМАТГАРАЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "МАВЛИЯ",
          secondname: "АХМАТГАРАЕВНА",
        },
      },
      index: 22,
      x: -3424.494154652703,
      y: 144.29275929677937,
      vy: -31.981733786085897,
      vx: -17.01610504850028,
    },
    {
      payload: {
        id: "4262e711-7295-528c-9b71-85e3ded906cb",
        inn: "182300173065",
        name: "АБАШЕВ ЮРИЙ ФИЛИМОНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "ЮРИЙ",
          secondname: "ФИЛИМОНОВИЧ",
        },
      },
      index: 23,
      x: -3597.322591263671,
      y: -879.6914510992791,
      vy: -9.871442446831857,
      vx: -6.250823087104908,
    },
    {
      payload: {
        id: "47e214dd-b6d0-5f6b-8e02-d6dc4a0d6972",
        inn: "182902950015",
        name: "БОГДАНОВ АНАТОЛИЙ АРСЕНТЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "АНАТОЛИЙ",
          secondname: "АРСЕНТЬЕВИЧ",
        },
      },
      index: 24,
      x: -2383.955833778558,
      y: 575.2534497401617,
      vy: -16.965411627883643,
      vx: -22.23942136762626,
    },
    {
      payload: {
        id: "4ad2377f-ccbd-5d83-943b-5da3bc3b5107",
        inn: "182904525432",
        name: "БАЖЕНОВ АЛЕКСЕЙ ВЯЧЕСЛАВОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "ВЯЧЕСЛАВОВИЧ",
        },
      },
      index: 25,
      x: -3498.868567743426,
      y: -60.67004425531199,
      vy: -22.883110801462987,
      vx: -11.390784721178772,
    },
    {
      payload: {
        id: "4d2010db-ffaa-509b-9834-a21682c39584",
        inn: "180502148413",
        name: "БАБИНЦЕВА ВАЛЕРИЯ ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БАБИНЦЕВА",
          firstname: "ВАЛЕРИЯ",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 26,
      x: -1896.4980411996423,
      y: -143.74300030163192,
      vy: -9.122725212219562,
      vx: -26.51021518430584,
    },
    {
      payload: {
        id: "5145afcf-a991-54cd-9c0c-03b35c298305",
        inn: "182905155921",
        name: "БОТАЛОВ АНАТОЛИЙ ВЯЧЕСЛАВОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОТАЛОВ",
          firstname: "АНАТОЛИЙ",
          secondname: "ВЯЧЕСЛАВОВИЧ",
        },
      },
      index: 27,
      x: -2796.0129297859285,
      y: 761.4621108218945,
      vy: -15.494432761345127,
      vx: -14.131267525465814,
    },
    {
      payload: {
        id: "51d49bc0-ef88-5814-bec4-8753e21775b9",
        inn: "182300078125",
        name: "БЕКМЕМЕТЬЕВ СЕРГЕЙ ИВАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БЕКМЕМЕТЬЕВ",
          firstname: "СЕРГЕЙ",
          secondname: "ИВАНОВИЧ",
        },
      },
      index: 28,
      x: -3059.881835640882,
      y: -733.7382133185907,
      vy: -11.4996210423646,
      vx: -15.749457026296936,
    },
    {
      payload: {
        id: "51e779ae-9722-518c-9f74-cd457e7ee40e",
        inn: "180902622959",
        name: "БОЛТАЧЕВ АЛЕКСАНДР НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОЛТАЧЕВ",
          firstname: "АЛЕКСАНДР",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 29,
      x: -2257.101177476719,
      y: -509.64027787581983,
      vy: -22.705163072850777,
      vx: -18.40352061586562,
    },
    {
      payload: {
        id: "53c64621-db0c-5a95-998b-d0cebd42a07d",
        inn: "183700034163",
        name: "БЕЗРУКОВА ТАТЬЯНА АНДРЕЕВНА",
        type: "person",
        name_obj: {
          lastname: "БЕЗРУКОВА",
          firstname: "ТАТЬЯНА",
          secondname: "АНДРЕЕВНА",
        },
      },
      index: 30,
      x: -3556.97664098585,
      y: 284.6122611854741,
      vy: -25.783562302728523,
      vx: -15.497892900381903,
    },
    {
      payload: {
        id: "56135b38-0c90-5eff-bb20-afdf91ef9563",
        inn: "182902948721",
        name: "БАЖЕНОВА ГАЛИНА ВЛАДИМИРОВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "ГАЛИНА",
          secondname: "ВЛАДИМИРОВНА",
        },
      },
      index: 31,
      x: -2710.342068782553,
      y: -943.9309120172454,
      vy: -13.987283978274466,
      vx: -19.233764510375774,
    },
    {
      payload: {
        id: "5a9b92f8-ac36-5253-a0d7-2b00a498bd05",
        inn: "182902947132",
        name: "АБАШЕВА ТАТЬЯНА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "ТАТЬЯНА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 32,
      x: -3050.769907614526,
      y: 649.6677733696193,
      vy: -24.682420022624203,
      vx: -14.80683590283697,
    },
    {
      payload: {
        id: "5b1ba8a6-0ce0-53be-88e1-1eea806bd2c1",
        inn: "182902947206",
        name: "АБАШЕВ МАНСУР МАГСУМОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "МАНСУР",
          secondname: "МАГСУМОВИЧ",
        },
      },
      index: 33,
      x: -3556.025319135826,
      y: -275.4009277278468,
      vy: -17.357670724259886,
      vx: -8.50697240726735,
    },
    {
      payload: {
        id: "5c53855f-09a5-52c3-9e1e-88acde932093",
        inn: "182902947069",
        name: "АБАШЕВА МАЯ АППОЛОНОВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "МАЯ",
          secondname: "АППОЛОНОВНА",
        },
      },
      index: 34,
      x: -1914.231018258472,
      y: 54.47371841883802,
      vy: -17.134107186277735,
      vx: -16.36140509956145,
    },
    {
      payload: {
        id: "5ff32676-5d71-5319-9203-d72d26ef1d6e",
        inn: "182902879563",
        name: "АЛЕКСЕЕВА НАДЕЖДА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АЛЕКСЕЕВА",
          firstname: "НАДЕЖДА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 35,
      x: -3475.5428611444336,
      y: 625.5714817626148,
      vy: -17.22652991212686,
      vx: -10.154223929721669,
    },
    {
      payload: {
        id: "65eee216-f789-5a19-8e03-dec513ae64b2",
        inn: "180500426312",
        name: "БУЛДАКОВА НИНА ВЕНИАМИНОВНА",
        type: "person",
        name_obj: {
          lastname: "БУЛДАКОВА",
          firstname: "НИНА",
          secondname: "ВЕНИАМИНОВНА",
        },
      },
      index: 36,
      x: -2511.6389767545065,
      y: -904.4117527661607,
      vy: -12.371635032955874,
      vx: -24.280763389111144,
    },
    {
      payload: {
        id: "670e0e82-e097-5941-add7-56129e56b621",
        inn: "182902949468",
        name: "БЕДНУШКИНА ОЛЬГА ВАЛЕНТИНОВНА",
        type: "person",
        name_obj: {
          lastname: "БЕДНУШКИНА",
          firstname: "ОЛЬГА",
          secondname: "ВАЛЕНТИНОВНА",
        },
      },
      index: 37,
      x: -2149.9358011436866,
      y: 606.9876167927105,
      vy: -18.644961105211475,
      vx: -21.20480237009731,
    },
    {
      payload: {
        id: "67f8e56d-3bee-5329-ba90-a7acbdfa0520",
        inn: "180500246253",
        name: "МАКСИМОВ ЕВГЕНИЙ ВАСИЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "МАКСИМОВ",
          firstname: "ЕВГЕНИЙ",
          secondname: "ВАСИЛЬЕВИЧ",
        },
      },
      index: 38,
      x: -3683.8220962697324,
      y: 103.20535927032604,
      vy: -21.293122044162647,
      vx: -8.423009040234813,
    },
    {
      payload: {
        id: "6a056bb9-93c7-5b4a-9f4f-a9f0bd4713a9",
        inn: "182905351330",
        name: "БОГДАНОВА НИНА ВЛАДИМИРОВНА",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВА",
          firstname: "НИНА",
          secondname: "ВЛАДИМИРОВНА",
        },
      },
      index: 39,
      x: -1919.085792356847,
      y: -335.3834460306017,
      vy: -15.055810525628784,
      vx: -20.658076364792024,
    },
    {
      payload: {
        id: "6a49d2f7-458d-52f5-900e-4538d837eef2",
        inn: "182900223960",
        name: "АРАСЛАНОВА ВАЛЕНТИНА ИВАНОВНА",
        type: "person",
        name_obj: {
          lastname: "АРАСЛАНОВА",
          firstname: "ВАЛЕНТИНА",
          secondname: "ИВАНОВНА",
        },
      },
      index: 40,
      x: -2226.878275698937,
      y: 377.8272894115918,
      vy: -22.10532717338069,
      vx: -19.219235591911193,
    },
    {
      payload: {
        id: "77855594-aaf4-5724-a411-0e73396e9f5f",
        inn: "182902948802",
        name: "БАЖЕНОВА ЛЮДМИЛА ИВАНОВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "ЛЮДМИЛА",
          secondname: "ИВАНОВНА",
        },
      },
      index: 41,
      x: -4088.41123041388,
      y: 63.86525080642104,
      vy: -10.281874936418722,
      vx: -7.41317783868088,
    },
    {
      payload: {
        id: "7d9a1306-14ed-5a2f-a4cf-bf8355acefdc",
        inn: "182902950720",
        name: "БУЗМАКОВА ЗИНАИДА МИХАЙЛОВНА",
        type: "person",
        name_obj: {
          lastname: "БУЗМАКОВА",
          firstname: "ЗИНАИДА",
          secondname: "МИХАЙЛОВНА",
        },
      },
      index: 42,
      x: -2046.19411298316,
      y: 281.5886255722779,
      vy: -22.542600058932617,
      vx: -9.986907610034674,
    },
    {
      payload: {
        id: "7e10a85d-f308-5d1b-9085-bcbe0bd38c9a",
        inn: "180203189563",
        name: "БОГДАНОВ АЛЕКСЕЙ СТАНИСЛАВОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "СТАНИСЛАВОВИЧ",
        },
      },
      index: 43,
      x: -3626.9221672862664,
      y: 466.107300321779,
      vy: -18.0645849171595,
      vx: -9.451450333830747,
    },
    {
      payload: {
        id: "86136260-c667-51ab-986f-15efaf2bdf87",
        inn: "182902947527",
        name: "АЗЕРАКИНА ЕВГЕНИЯ АФАНАСЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АЗЕРАКИНА",
          firstname: "ЕВГЕНИЯ",
          secondname: "АФАНАСЬЕВНА",
        },
      },
      index: 44,
      x: -2823.305040626949,
      y: -766.1321011622265,
      vy: -12.989043405817261,
      vx: -12.606542565350553,
    },
    {
      payload: {
        id: "8b33f8b1-7eba-5ab8-b95a-c9687cc8f968",
        inn: "182906622760",
        name: "АБАШЕВА ИРАИДА ПРОКОПЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "ИРАИДА",
          secondname: "ПРОКОПЬЕВНА",
        },
      },
      index: 45,
      x: -3016.802898766667,
      y: 874.5968756786004,
      vy: -14.001529132081151,
      vx: -14.682477171231957,
    },
    {
      payload: {
        id: "8fa2441a-5e13-5651-9cee-8b1479be3274",
        inn: "180501284879",
        name: "БОГДАНОВА ЛАРИСА НИКОЛАЕВНА",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВА",
          firstname: "ЛАРИСА",
          secondname: "НИКОЛАЕВНА",
        },
      },
      index: 46,
      x: -3732.7635549963043,
      y: -130.1806026373476,
      vy: -17.470290796450588,
      vx: -4.970324514793579,
    },
    {
      payload: {
        id: "90c85560-d340-5eac-bd6a-5da5cf441464",
        inn: "",
        name: "АБАШЕВ АЛЕКСАНДР ХАЙФУТДИНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "АЛЕКСАНДР",
          secondname: "ХАЙФУТДИНОВИЧ",
        },
      },
      index: 47,
      x: -1943.1950965183066,
      y: 510.822121123276,
      vy: -14.646746706765166,
      vx: -20.353739766390042,
    },
    {
      payload: {
        id: "90ca23c9-6cec-518b-a137-ea094b74dcc1",
        inn: "182903289550",
        name: "АРАСЛАНОВ МИРЗАЯН ШАЙДУЛЛИН",
        type: "person",
        name_obj: {
          lastname: "АРАСЛАНОВ",
          firstname: "МИРЗАЯН",
          secondname: "ШАЙДУЛЛИН",
        },
      },
      index: 48,
      x: -3293.435393208962,
      y: 455.6089279091232,
      vy: -31.842903246068474,
      vx: -14.173763565549153,
    },
    {
      payload: {
        id: "919b9fa8-fdd5-5b8b-823b-66dd2ba2de39",
        inn: "182903811705",
        name: "БОЛТАЧЕВА НЕВА ВЛАДИМИРОВНА",
        type: "person",
        name_obj: {
          lastname: "БОЛТАЧЕВА",
          firstname: "НЕВА",
          secondname: "ВЛАДИМИРОВНА",
        },
      },
      index: 49,
      x: -3869.828681673785,
      y: -523.1396222824999,
      vy: -21.537588534696958,
      vx: -11.56086663996932,
    },
    {
      payload: {
        id: "963bf2f4-9117-59ca-814f-b6266e19e3a8",
        inn: "182906849390",
        name: "АВЕРЬЯНОВА ЛИЛИЯ АЛЕКСАНДРОВНА",
        type: "person",
        name_obj: {
          lastname: "АВЕРЬЯНОВА",
          firstname: "ЛИЛИЯ",
          secondname: "АЛЕКСАНДРОВНА",
        },
      },
      index: 50,
      x: -2595.183731403048,
      y: 1132.9309478326534,
      vy: -17.208183559812554,
      vx: -15.872996371153114,
    },
    {
      payload: {
        id: "96ea959a-b13a-5bed-966a-e1aad72004f9",
        inn: "182906681405",
        name: "АНТОНОВ ВЛАДИМИР АНАТОЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АНТОНОВ",
          firstname: "ВЛАДИМИР",
          secondname: "АНАТОЛЬЕВИЧ",
        },
      },
      index: 51,
      x: -3830.5236982525707,
      y: 387.7356893860078,
      vy: -18.9177265730616,
      vx: -9.755321236101219,
    },
    {
      payload: {
        id: "9b19c339-5138-5f79-b7df-1c1aaddb1c2b",
        inn: "181500146451",
        name: "ЗЛОБИНА ОЛЬГА ЛЕОНИДОВНА",
        type: "person",
        name_obj: {
          lastname: "ЗЛОБИНА",
          firstname: "ОЛЬГА",
          secondname: "ЛЕОНИДОВНА",
        },
      },
      index: 52,
      x: -2377.479140723701,
      y: -1055.216160128137,
      vy: -10.371221983914166,
      vx: -18.081704307214608,
    },
    {
      payload: {
        id: "9b783d89-e242-590a-8759-9c83a9d76f24",
        inn: "182903586143",
        name: "БУДАНОВ АЛЕКСАНДР МИХАЙЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БУДАНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "МИХАЙЛОВИЧ",
        },
      },
      index: 53,
      x: -2829.1627446557677,
      y: 997.7894081470619,
      vy: -23.573785803418833,
      vx: -9.580698843459183,
    },
    {
      payload: {
        id: "9e4342b2-9293-531d-9ddd-319564cbe771",
        inn: "182903923720",
        name: "БАЖЕНОВА ЮЛИЯ ЯКОВЛЕВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "ЮЛИЯ",
          secondname: "ЯКОВЛЕВНА",
        },
      },
      index: 54,
      x: -3975.8916342170296,
      y: -338.36231673957946,
      vy: -13.414067568874177,
      vx: -13.48295456213097,
    },
    {
      payload: {
        id: "a04dc086-3697-5726-ae24-44dbdca6f267",
        inn: "182902654489",
        name: "АЛЕКСЕЕВ ЮРИЙ ВАСИЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АЛЕКСЕЕВ",
          firstname: "ЮРИЙ",
          secondname: "ВАСИЛЬЕВИЧ",
        },
      },
      index: 55,
      x: -2001.3101060743174,
      y: 743.4154127704982,
      vy: -23.650158093400073,
      vx: -13.666530583531866,
    },
    {
      payload: {
        id: "a40dc323-fefd-55cc-a442-db93b3fec9f9",
        inn: "182904827560",
        name: "БАЖЕНОВА ЗИНАИДА ПАВЛОВНА",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВА",
          firstname: "ЗИНАИДА",
          secondname: "ПАВЛОВНА",
        },
      },
      index: 56,
      x: -3621.2754859620154,
      y: 793.4572156074684,
      vy: -13.911570901166156,
      vx: -9.623535729462695,
    },
    {
      payload: {
        id: "a50acbd4-3379-55f8-baec-1da9cb674fe2",
        inn: "182901977102",
        name: "АБАШЕВ ГЕННАДИЙ БОРИСОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "ГЕННАДИЙ",
          secondname: "БОРИСОВИЧ",
        },
      },
      index: 57,
      x: -2944.6733685074755,
      y: -941.3802536342748,
      vy: -16.253412659423173,
      vx: -12.421924223542293,
    },
    {
      payload: {
        id: "a79d98a5-1654-5122-a17d-70dc94d7dc5b",
        inn: "182902948658",
        name: "БАЖЕНОВ ЛЕОНИД МИХАЙЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "ЛЕОНИД",
          secondname: "МИХАЙЛОВИЧ",
        },
      },
      index: 58,
      x: -2596.3553923006675,
      y: 925.639444617116,
      vy: -20.027088564318415,
      vx: -10.212420204256388,
    },
    {
      payload: {
        id: "a9c1529e-76c0-54f3-8c90-40f9d9cb93fe",
        inn: "182902052090",
        name: "БАСОВА ЕВДОКИЯ МИХАЙЛОВНА",
        type: "person",
        name_obj: {
          lastname: "БАСОВА",
          firstname: "ЕВДОКИЯ",
          secondname: "МИХАЙЛОВНА",
        },
      },
      index: 59,
      x: -3906.204909672894,
      y: 209.7719709707819,
      vy: -23.916667814336424,
      vx: -9.949761717064334,
    },
    {
      payload: {
        id: "ac9101ef-e5f1-53d7-b50c-d49f10285930",
        inn: "182902017190",
        name: "АБАШЕВ РАВИЛЬ ХИЯЛИЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "РАВИЛЬ",
          secondname: "ХИЯЛИЕВИЧ",
        },
      },
      index: 60,
      x: -1718.3777301131565,
      y: -274.7004227337067,
      vy: -17.31581248156379,
      vx: -22.424991989420526,
    },
    {
      payload: {
        id: "afba6451-93ee-5dd2-852d-436cf757da34",
        inn: "182902949605",
        name: "БИЯНОВ ИЛФАТ ЗИННАТУЛЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БИЯНОВ",
          firstname: "ИЛФАТ",
          secondname: "ЗИННАТУЛЛОВИЧ",
        },
      },
      index: 61,
      x: -3225.6551353747154,
      y: 937.508816440291,
      vy: -20.274557674366708,
      vx: -20.317265063308103,
    },
    {
      payload: {
        id: "b00c6f2c-413d-5eae-b090-aff94e2d1b46",
        inn: "180500642970",
        name: "АБАШЕВА ЛИДИЯ ЯКОВЛЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "ЛИДИЯ",
          secondname: "ЯКОВЛЕВНА",
        },
      },
      index: 62,
      x: -3184.0146827662356,
      y: -897.990529385998,
      vy: -11.35205519173965,
      vx: -15.684121065781262,
    },
    {
      payload: {
        id: "b1dc7197-f27c-5fe0-b5d5-ec415577147a",
        inn: "182906827238",
        name: "БАЖЕНОВ ВИКЕНТИЙ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "ВИКЕНТИЙ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 63,
      x: -2164.9652779237513,
      y: 889.6286534791258,
      vy: -20.76415730474976,
      vx: -4.401781226334634,
    },
    {
      payload: {
        id: "b235570a-c889-523e-96ab-f948d6f4b1bd",
        inn: "182907239302",
        name: "АНТОНОВА АНТОНИНА НИКОЛАЕВНА",
        type: "person",
        name_obj: {
          lastname: "АНТОНОВА",
          firstname: "АНТОНИНА",
          secondname: "НИКОЛАЕВНА",
        },
      },
      index: 64,
      x: -3946.2696233875445,
      y: 696.7375415002139,
      vy: -18.58944240154763,
      vx: -13.868802861296397,
    },
    {
      payload: {
        id: "b34351a9-7db1-51b6-8c50-0facfa0b1cf9",
        inn: "182906302745",
        name: "АВЕРИНА ГАЛИНА НИКОЛАЕВНА",
        type: "person",
        name_obj: {
          lastname: "АВЕРИНА",
          firstname: "ГАЛИНА",
          secondname: "НИКОЛАЕВНА",
        },
      },
      index: 65,
      x: -2630.376333392013,
      y: -1119.2935699324678,
      vy: -10.336101389998461,
      vx: -17.216290185085104,
    },
    {
      payload: {
        id: "b7056dfc-4183-5d40-ace2-7e6e16ae13fa",
        inn: "180501400758",
        name: "АНИСИМОВ ВЛАДИМИР АЛЕКСЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АНИСИМОВ",
          firstname: "ВЛАДИМИР",
          secondname: "АЛЕКСЕЕВИЧ",
        },
      },
      index: 66,
      x: -2573.381513788498,
      y: 707.9281493212686,
      vy: -25.38979316918987,
      vx: -8.652352061650564,
    },
    {
      payload: {
        id: "b78b6a03-455c-5259-9a7e-20281fe246ca",
        inn: "180500252666",
        name: "БАБИНЦЕВА ФАИНА ИВАНОВНА",
        type: "person",
        name_obj: {
          lastname: "БАБИНЦЕВА",
          firstname: "ФАИНА",
          secondname: "ИВАНОВНА",
        },
      },
      index: 67,
      x: -4026.5662456606156,
      y: -148.43649255852404,
      vy: -11.626566205635477,
      vx: -8.144698449790363,
    },
    {
      payload: {
        id: "b7b4b9d7-2c2e-56f2-8bc9-bfb7b646b3b7",
        inn: "180501395138",
        name: "БЕГИШЕВ ВЛАДИМИР ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БЕГИШЕВ",
          firstname: "ВЛАДИМИР",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 68,
      x: -1682.279134085847,
      y: 333.11058129827785,
      vy: -12.053368490964735,
      vx: -18.618279112330207,
    },
    {
      payload: {
        id: "b9be1c20-3db8-5cd6-a59c-b96d0b5a3e1a",
        inn: "",
        name: "АГАФОНОВ АЛЕКСЕЙ НИКАНРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АГАФОНОВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "НИКАНРОВИЧ",
        },
      },
      index: 69,
      x: -3278.1350522615003,
      y: 713.4336617172097,
      vy: -24.293404394442963,
      vx: -8.37702370084518,
    },
    {
      payload: {
        id: "bddbe363-cb94-5995-bbd1-885bcbd2e98e",
        inn: "182902950801",
        name: "БУЛДАКОВ АНАТОЛИЙ ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БУЛДАКОВ",
          firstname: "АНАТОЛИЙ",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 70,
      x: -2859.9129587614857,
      y: -1130.9322356580274,
      vy: -10.281689222422541,
      vx: -13.408697688120133,
    },
    {
      payload: {
        id: "bf639b6f-c51e-5e70-97f8-16c806989fe0",
        inn: "182902950199",
        name: "БОГДАНОВА ЕЛЕНА САВЕЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВА",
          firstname: "ЕЛЕНА",
          secondname: "САВЕЛЬЕВНА",
        },
      },
      index: 71,
      x: -2687.371766398103,
      y: 1353.5193194996111,
      vy: -17.932230137675976,
      vx: -17.585688977706603,
    },
    {
      payload: {
        id: "c6a5bc76-c446-55ea-aae5-e83aadeb4478",
        inn: "182900285356",
        name: "АВИЛОВА НАТАЛЬЯ ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АВИЛОВА",
          firstname: "НАТАЛЬЯ",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 72,
      x: -3756.437817164782,
      y: 623.4511178192813,
      vy: -16.96291363810287,
      vx: -8.578043087722092,
    },
    {
      payload: {
        id: "c963974a-18a6-57f9-8d53-2fd37844c481",
        inn: "180501435278",
        name: "БОТАЛОВ ВЛАДИМИР СЕРАФИМОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОТАЛОВ",
          firstname: "ВЛАДИМИР",
          secondname: "СЕРАФИМОВИЧ",
        },
      },
      index: 73,
      x: -2126.6005825201073,
      y: -897.0649466707043,
      vy: -10.129365796831905,
      vx: -18.678479513867284,
    },
    {
      payload: {
        id: "ca7a78df-62a0-5e4b-8a9c-37efdd331590",
        inn: "182902948016",
        name: "АРТЕМЬЕВА ТАСЛИМА СЫНГАТУЛЛОВНА",
        type: "person",
        name_obj: {
          lastname: "АРТЕМЬЕВА",
          firstname: "ТАСЛИМА",
          secondname: "СЫНГАТУЛЛОВНА",
        },
      },
      index: 74,
      x: -3237.9198033687976,
      y: 1127.640898502616,
      vy: -25.25235405358711,
      vx: -18.7027566909994,
    },
    {
      payload: {
        id: "ccf2eb20-16be-578e-81b6-455e8ce9be23",
        inn: "182904416546",
        name: "БОРОВИКОВ ВИКТОР ЯКОВЛЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОРОВИКОВ",
          firstname: "ВИКТОР",
          secondname: "ЯКОВЛЕВИЧ",
        },
      },
      index: 75,
      x: -3548.0673239923663,
      y: -683.4293342781831,
      vy: -12.858926289792558,
      vx: -6.471447942834286,
    },
    {
      payload: {
        id: "d2df7649-de11-510b-80fe-c43d074e90a4",
        inn: "182904149570",
        name: "АВИЛОВ ВАСИЛИЙ ФЕДОРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АВИЛОВ",
          firstname: "ВАСИЛИЙ",
          secondname: "ФЕДОРОВИЧ",
        },
      },
      index: 76,
      x: -2117.6017680017408,
      y: 1088.8287610763261,
      vy: -18.77384770485877,
      vx: -13.858983421562296,
    },
    {
      payload: {
        id: "d3135dae-8aee-5fe9-aa81-5fc9295dca4a",
        inn: "182902949926",
        name: "БЛИНОВА ВАЛЕНТИНА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БЛИНОВА",
          firstname: "ВАЛЕНТИНА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 77,
      x: -3419.541144785163,
      y: 888.4628289073735,
      vy: -20.44027381078574,
      vx: -23.273698682838685,
    },
    {
      payload: {
        id: "d47e6404-1182-5555-ae9b-58c5d63755c0",
        inn: "182909751668",
        name: "АГАФОНОВА МАРГАРИТА КИРИЛЛОВНА",
        type: "person",
        name_obj: {
          lastname: "АГАФОНОВА",
          firstname: "МАРГАРИТА",
          secondname: "КИРИЛЛОВНА",
        },
      },
      index: 78,
      x: -3086.9092624042837,
      y: -1101.5617367841146,
      vy: -8.365751885031022,
      vx: -10.492155978249004,
    },
    {
      payload: {
        id: "d5100cac-e585-5e57-9193-35c4f712327f",
        inn: "182902949147",
        name: "БАЙБОРОДОВА ЗИНАИДА СТЕПАНОВНА",
        type: "person",
        name_obj: {
          lastname: "БАЙБОРОДОВА",
          firstname: "ЗИНАИДА",
          secondname: "СТЕПАНОВНА",
        },
      },
      index: 79,
      x: -2929.713632802355,
      y: 1373.874339474115,
      vy: -24.855195506831365,
      vx: -13.320317353729743,
    },
    {
      payload: {
        id: "d91ab6e8-885e-5da2-8535-321fa4be4505",
        inn: "182909123818",
        name: "АНТОНОВ АЛЕКСАНДР ИВАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АНТОНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "ИВАНОВИЧ",
        },
      },
      index: 80,
      x: -4079.1330738838637,
      y: 317.1750463032977,
      vy: -15.07011108753182,
      vx: -1.604940142950386,
    },
    {
      payload: {
        id: "db1ee070-2b55-5b34-bd5e-8c64f532fdf8",
        inn: "182904889278",
        name: "БАЛЫКОВ АНАТОЛИЙ НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЛЫКОВ",
          firstname: "АНАТОЛИЙ",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 81,
      x: -1688.0427001020762,
      y: -80.39424489676254,
      vy: -27.651930716225408,
      vx: -20.003489488074507,
    },
    {
      payload: {
        id: "dca5ec9a-af6f-51a0-bd83-da2ebbf55700",
        inn: "182902813058",
        name: "АБАШЕВА ТАТЬЯНА НИКОЛАЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "ТАТЬЯНА",
          secondname: "НИКОЛАЕВНА",
        },
      },
      index: 82,
      x: -3494.466342466254,
      y: 1181.4190594994318,
      vy: -24.850331336677304,
      vx: -13.723536388835374,
    },
    {
      payload: {
        id: "e2e30d41-699c-5a25-a3cd-4b92aab7a738",
        inn: "182906642808",
        name: "АБАШЕВ ХАСАН ГАБДРАХМАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "ХАСАН",
          secondname: "ГАБДРАХМАНОВИЧ",
        },
      },
      index: 83,
      x: -2317.9606287664315,
      y: -834.8836923502424,
      vy: -13.05600978267775,
      vx: -18.004527103828174,
    },
    {
      payload: {
        id: "e90dfc94-e1fe-5137-ae67-1f63e975cf18",
        inn: "182902950657",
        name: "БУЗИКОВА ВАЛЕНТИНА ИВАНОВНА",
        type: "person",
        name_obj: {
          lastname: "БУЗИКОВА",
          firstname: "ВАЛЕНТИНА",
          secondname: "ИВАНОВНА",
        },
      },
      index: 84,
      x: -2484.064718171031,
      y: 1305.9582392077375,
      vy: -22.430609874848397,
      vx: -19.161556944314817,
    },
    {
      payload: {
        id: "e94ff2de-71ff-582e-9851-6865ea97b200",
        inn: "182902946890",
        name: "АБАШЕВ РИФХАТ ХИКМАТУЛЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "РИФХАТ",
          secondname: "ХИКМАТУЛЛОВИЧ",
        },
      },
      index: 85,
      x: -3830.4043537488255,
      y: 841.09175019734,
      vy: -25.930374637630816,
      vx: -19.89979847092839,
    },
    {
      payload: {
        id: "ec4bb80e-cdfc-5f45-935b-63434971cf61",
        inn: "182906990435",
        name: "БУЗАНАКОВ АРТЕМ ФАРИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БУЗАНАКОВ",
          firstname: "АРТЕМ",
          secondname: "ФАРИДОВИЧ",
        },
      },
      index: 86,
      x: -1733.3671788668414,
      y: 532.1897571325867,
      vy: -16.189669321497842,
      vx: -21.88375855274089,
    },
    {
      payload: {
        id: "ef31fd20-1548-5a1d-89ea-14b273226086",
        inn: "182900297471",
        name: "ИГРУНОВ МИХАИЛ МИХАЙЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ИГРУНОВ",
          firstname: "МИХАИЛ",
          secondname: "МИХАЙЛОВИЧ",
        },
      },
      index: 87,
      x: -3133.969402572187,
      y: 1338.8116700492837,
      vy: -22.285991491013657,
      vx: -10.278662931975662,
    },
    {
      payload: {
        id: "ef622358-6483-5bfc-984c-5564fe79b787",
        inn: "182902948190",
        name: "АФОНИН АНАТОЛИЙ АРКАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АФОНИН",
          firstname: "АНАТОЛИЙ",
          secondname: "АРКАДЬЕВИЧ",
        },
      },
      index: 88,
      x: -3771.0134642895932,
      y: -325.6106513246514,
      vy: -14.45966280537334,
      vx: -13.466285710120916,
    },
    {
      payload: {
        id: "f0e7cf3c-6e2a-5928-9dd4-7d658ee64628",
        inn: "182902947380",
        name: "АВВАКУМОВА ТАТЬЯНА ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АВВАКУМОВА",
          firstname: "ТАТЬЯНА",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 89,
      x: -1953.2649014572798,
      y: 941.9489585868005,
      vy: -27.581865447433312,
      vx: -22.664386189562627,
    },
    {
      payload: {
        id: "f1dc8995-2d3f-52c8-9a5a-e4a9c13d9cde",
        inn: "182907344427",
        name: "БАБИНЦЕВ КОНСТАНТИН ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАБИНЦЕВ",
          firstname: "КОНСТАНТИН",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 90,
      x: -3562.7916608766745,
      y: 1007.6154002391174,
      vy: -15.25172366268572,
      vx: -13.472565392578412,
    },
    {
      payload: {
        id: "f5e8ff1f-66c8-5581-b308-884ffb72864e",
        inn: "182902947453",
        name: "АВЕРИН ГЕННАДИЙ НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АВЕРИН",
          firstname: "ГЕННАДИЙ",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 91,
      x: -2035.4176758391948,
      y: -502.40499249370896,
      vy: -20.27974259909804,
      vx: -19.58991997102288,
    },
    {
      payload: {
        id: "f68210b3-3090-5fbf-accd-1a02701bc5a6",
        inn: "182906990361",
        name: "БУЗАНАКОВ ДЕНИС ФАРИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БУЗАНАКОВ",
          firstname: "ДЕНИС",
          secondname: "ФАРИДОВИЧ",
        },
      },
      index: 92,
      x: -2815.8164989421243,
      y: 1202.4367408243425,
      vy: -25.883754099606833,
      vx: -16.866691039499212,
    },
    {
      payload: {
        id: "faf021a0-bf64-55e4-b213-81e7167a3788",
        inn: "183700401430",
        name: "АНТОНОВ ЛЕВ СЕМЕНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АНТОНОВ",
          firstname: "ЛЕВ",
          secondname: "СЕМЕНОВИЧ",
        },
      },
      index: 93,
      x: -4021.878421333495,
      y: 515.2829707123387,
      vy: -25.51240348468129,
      vx: -12.892060986322537,
    },
    {
      payload: {
        id: "fec63002-56c0-5b76-968f-daca031084f6",
        inn: "182900712590",
        name: "БУЗАНАКОВА ЕКАТЕРИНА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БУЗАНАКОВА",
          firstname: "ЕКАТЕРИНА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 94,
      x: -1963.2574181973716,
      y: -714.9808124856746,
      vy: -8.499803836069269,
      vx: -19.317281984448666,
    },
    {
      payload: {
        id: "ff21c9c2-5b7b-51ab-b2c5-f3233788900f",
        inn: "182902947774",
        name: "АНАНИНА РОЗА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АНАНИНА",
          firstname: "РОЗА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 95,
      x: -3332.681897782869,
      y: 1293.5383074727483,
      vy: -17.971720958023294,
      vx: -9.80688286466429,
    },
    {
      payload: {
        id: "2ce554d3-45bc-5597-9cb4-4192e3ceb2be",
        inn: "1805005170",
        born: "1999-02-24",
        name: 'СПК "ЗОТОВСКИЙ"',
        ogrn: "1021800589073",
        type: "organisation",
        death: {
          date: "2004-03-03",
          cause: "Ликвидация юридического лица по решению суда",
        },
        okved: {
          code: null,
          name: null,
        },
        status: null,
        address: {
          zip_code: "427614",
          place_name: "ЗОЛОТАРЕВО",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
        },
      },
      index: 96,
      x: -3765.0354488011276,
      y: -689.7627528493166,
      vy: -20.368672440537473,
      vx: -3.3551973201005607,
    },
    {
      payload: {
        id: "4a326c3c-8a2f-55fe-a858-add4ad33cbd1",
        inn: "1805005187",
        born: "1997-08-08",
        name: 'ОАО "ЧУРА"',
        ogrn: "1021800583298",
        type: "organisation",
        death: {
          date: "2007-08-01",
          cause: "Ликвидация юридического лица",
        },
        okved: {
          code: null,
          name: null,
        },
        status: null,
        address: {
          zip_code: "427631",
          place_name: "ЧУРА",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "ЦЕНТРАЛЬНАЯ",
          street_type: "УЛ.",
        },
      },
      index: 97,
      x: -2291.8151671594755,
      y: 1228.376565180205,
      vy: -19.415842899230043,
      vx: -19.51804570321603,
    },
    {
      payload: {
        id: "780c2c4b-9045-5cba-8c57-808891844835",
        inn: "1805005074",
        born: "1999-06-28",
        name: 'СПК "СЛУДКА"',
        ogrn: "1021800585058",
        type: "organisation",
        death: {
          date: "2008-11-07",
          cause:
            "Прекращение деятельности юридического лица путем реорганизации в форме преобразования",
        },
        okved: {
          code: "01.30",
          name: "Растениеводство в сочетании с животноводством (смешанное сельское хозяйство)",
        },
        status: null,
        address: {
          house: "Д.1",
          zip_code: "427601",
          place_name: "ВЕРХНЯЯ СЛУДКА",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "САДОВАЯ",
          street_type: "УЛ.",
        },
      },
      index: 98,
      x: -3747.020208119881,
      y: 1044.4628624012914,
      vy: -24.494440570800723,
      vx: -10.152520476200563,
    },
    {
      payload: {
        id: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
        inn: "1805009544",
        born: "1998-11-05",
        name: 'СХПК "ЗАРЕЧНЫЙ"',
        ogrn: "1021800585047",
        type: "organisation",
        death: null,
        okved: {
          code: "01.50",
          name: "Смешанное сельское хозяйство",
        },
        status: {
          code: "117",
          date: "2020-11-03",
          cause:
            "Юридическое лицо признано несостоятельным (банкротом) и в отношении него открыто конкурсное производство",
        },
        address: {
          zip_code: "427601",
          place_name: "ВЕРХНЯЯ БОГАТЫРКА",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
        },
      },
      index: 99,
      x: -6188.229157344769,
      y: -2027.6613852870817,
      vy: -0.5730637635631123,
      vx: -27.252995916198035,
    },
    {
      payload: {
        id: "8d0855a3-c8fc-553a-86a1-f3a487270ee5",
        inn: "1805005042",
        born: "1999-06-30",
        name: 'СПК "НИВА"',
        ogrn: "1021800583474",
        type: "organisation",
        death: {
          date: "2007-10-16",
          cause:
            "Прекращение деятельности юридического лица в связи с его ликвидацией на основании определения арбитражного суда о завершении конкурсного производства",
        },
        okved: {
          code: null,
          name: null,
        },
        status: null,
        address: {
          zip_code: "427645",
          place_name: "ПУСОШУР",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
        },
      },
      index: 100,
      x: -3015.7862060553907,
      y: 1141.8582956927198,
      vy: -21.854399143793493,
      vx: -16.44162990206676,
    },
    {
      payload: {
        id: "ef169a0c-18f2-5f8e-a69e-1a0341469c69",
        inn: "1805005204",
        born: "1999-04-14",
        name: 'СПК "АДАМСКИЙ"',
        ogrn: "1021800585168",
        type: "organisation",
        death: {
          date: "2005-07-28",
          cause:
            "Прекращение деятельности юридического лица в связи с его ликвидацией на основании определения арбитражного суда о завершении конкурсного производства",
        },
        okved: {
          code: null,
          name: null,
        },
        status: null,
        address: {
          house: "Д.3",
          zip_code: "427611",
          place_name: "АДАМ",
          place_type: "Д",
          region_code: "18",
          region_name: "УДМУРТСКАЯ",
          region_type: "РЕСПУБЛИКА",
          street_name: "МОЛОДЕЖНАЯ",
          street_type: "УЛ.",
        },
      },
      index: 101,
      x: -3901.2860744617155,
      y: 6.419134010896958,
      vy: -20.118501986814408,
      vx: -5.8679833566488595,
    },
    {
      payload: {
        id: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
        inn: "1805009417",
        born: "1998-03-25",
        name: 'СХПК "ПРИГОРОДНЫЙ"',
        ogrn: "1021800583584",
        type: "organisation",
        death: null,
        okved: {
          code: "01.50",
          name: "Смешанное сельское хозяйство",
        },
        status: null,
        address: {
          flat: "",
          house: "Д. 3",
          zip_code: "427616",
          city_name: "КАЧКАШУР",
          city_type: "Д",
          region_code: "18",
          region_name: "Удмуртская Республика",
          street_name: "ЦЕНТРАЛЬНАЯ",
          street_type: "УЛ",
          district_name: "ГЛАЗОВСКИЙ РАЙОН",
        },
      },
      index: 102,
      x: 5524.20066281807,
      y: 221.89323074516687,
      vy: 1.81343130968678,
      vx: 1.259689914662125,
    },
    {
      payload: {
        id: "13f4730e-1319-56b4-9d48-37dbf8cb8a63",
        inn: "180500584301",
        name: "БОГДАНОВ НИКОЛАЙ ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "НИКОЛАЙ",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 103,
      x: -6809.650979886022,
      y: -1742.0102195601698,
      vy: 5.51702932100984,
      vx: -26.58161370156538,
    },
    {
      payload: {
        id: "2e2048c9-b1f8-5b2a-95a6-2a2e3f12d57e",
        inn: "180501052892",
        name: "БОГДАНОВА ВЕРА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВА",
          firstname: "ВЕРА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 104,
      x: -6768.444198293357,
      y: -2114.9835503402714,
      vy: 5.725515111496114,
      vx: -30.684343275677833,
    },
    {
      payload: {
        id: "3158db63-f0ea-53ac-83f2-cf631ebfe03f",
        inn: "183207070155",
        name: "МИКРЮКОВА КСЕНИЯ ВЯЧЕСЛАВОВНА",
        type: "person",
        name_obj: {
          lastname: "МИКРЮКОВА",
          firstname: "КСЕНИЯ",
          secondname: "ВЯЧЕСЛАВОВНА",
        },
      },
      index: 105,
      x: -6395.059362642182,
      y: -2594.257289726296,
      vy: 1.0367903506448684,
      vx: -31.780625372757243,
    },
    {
      payload: {
        id: "47e881a9-3eb7-5a33-8802-e0eac0c9e655",
        inn: "180501364700",
        name: "БОТАКОВ ЛЕОНИД ВЛАДИМИРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОТАКОВ",
          firstname: "ЛЕОНИД",
          secondname: "ВЛАДИМИРОВИЧ",
        },
      },
      index: 106,
      x: -6948.374322268498,
      y: -1894.1125351738428,
      vy: 1.8518378744102693,
      vx: -25.786721534011534,
    },
    {
      payload: {
        id: "59d00c7e-44a7-5b00-99bd-b0bae411c773",
        inn: "180500583812",
        name: "БОГДАНОВ АРКАДИЙ САВЕЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "АРКАДИЙ",
          secondname: "САВЕЛЬЕВИЧ",
        },
      },
      index: 107,
      x: -6623.591111093949,
      y: -2402.3365883362544,
      vy: 2.4582832543857647,
      vx: -31.44653583190152,
    },
    {
      payload: {
        id: "5c52f6fe-38a2-5b77-b7b6-44344065c984",
        inn: "180500558703",
        name: "МУХАНОВ АЛЕКСАНДР ЮРЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "МУХАНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "ЮРЬЕВИЧ",
        },
      },
      index: 108,
      x: -6211.0972959457795,
      y: -2747.026814545544,
      vy: 1.3905761201988176,
      vx: -33.37772295072787,
    },
    {
      payload: {
        id: "60d6013a-28c5-52ad-b6d0-bb9cde6e0ca2",
        inn: "180500556230",
        name: "АБДУЛОВА АНГЕЛИНА ВЕНИАМИНОВНА",
        type: "person",
        name_obj: {
          lastname: "АБДУЛОВА",
          firstname: "АНГЕЛИНА",
          secondname: "ВЕНИАМИНОВНА",
        },
      },
      index: 109,
      x: -6827.954452376872,
      y: -2412.5187234095683,
      vy: 3.503275583157238,
      vx: -23.603215144279776,
    },
    {
      payload: {
        id: "a2e05d6e-b506-58ed-9784-c746d643e9d1",
        inn: "180203763700",
        name: "ТРЕТЬЯКОВ ЭДУАРД ВАЛЕРИЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ТРЕТЬЯКОВ",
          firstname: "ЭДУАРД",
          secondname: "ВАЛЕРИЕВИЧ",
        },
      },
      index: 110,
      x: -6634.1122641492575,
      y: -2656.196820156846,
      vy: 5.2415497581339885,
      vx: -31.270491509095223,
    },
    {
      payload: {
        id: "a3cca08f-3d92-52fd-a5bd-529cccaa1d4b",
        inn: "182908480623",
        name: "БЕГИШЕВ АЛЕКСАНДР АНДРЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БЕГИШЕВ",
          firstname: "АЛЕКСАНДР",
          secondname: "АНДРЕЕВИЧ",
        },
      },
      index: 111,
      x: -6994.336079064817,
      y: -2303.9666003815073,
      vy: 1.5161196088129578,
      vx: -23.97388245953806,
    },
    {
      payload: {
        id: "a6850a05-07ba-507c-a818-d4ccd39851c3",
        inn: "180500559513",
        name: "БОГДАНОВ СЕРГЕЙ ГЕННАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "СЕРГЕЙ",
          secondname: "ГЕННАДЬЕВИЧ",
        },
      },
      index: 112,
      x: -7001.65531617955,
      y: -2094.232801217596,
      vy: 3.18829986256552,
      vx: -29.306607929259435,
    },
    {
      payload: {
        id: "bf270664-448a-5281-9712-c3a7c55f6696",
        inn: "180500259326",
        name: "БОГДАНОВ ВАСИЛИЙ АРСЕНТЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "ВАСИЛИЙ",
          secondname: "АРСЕНТЬЕВИЧ",
        },
      },
      index: 113,
      x: -6474.584354910048,
      y: -2808.856338294455,
      vy: 3.8003685735883463,
      vx: -32.15137378940979,
    },
    {
      payload: {
        id: "d098568e-872e-5996-a280-5cb1b7739a1c",
        inn: "180500790390",
        name: "КУНАЕВ АЛЕКСЕЙ ВАСИЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "КУНАЕВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "ВАСИЛЬЕВИЧ",
        },
      },
      index: 114,
      x: -6845.858393495678,
      y: -2621.6432277896192,
      vy: 6.015591201607935,
      vx: -29.594995444138593,
    },
    {
      payload: {
        id: "00b773d3-b267-5181-90be-8c722eeca9bf",
        inn: "180500422861",
        name: "ФИЛИППОВ АЛЕКСЕЙ ГЕННАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ФИЛИППОВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "ГЕННАДЬЕВИЧ",
        },
      },
      index: 115,
      x: 6248.595035660056,
      y: 299.2764556199029,
      vy: 4.458257425864108,
      vx: -9.154791470408483,
    },
    {
      payload: {
        id: "07ae3a01-bf9d-54f9-92ad-ec68b55d5a6e",
        inn: "180500549191",
        name: "АЛЕКСЕЕВА НАДЕЖДА ЛЕОНИДОВНА",
        type: "person",
        name_obj: {
          lastname: "АЛЕКСЕЕВА",
          firstname: "НАДЕЖДА",
          secondname: "ЛЕОНИДОВНА",
        },
      },
      index: 116,
      x: 5458.28574090187,
      y: 867.6239521013717,
      vy: 3.02216344192129,
      vx: -10.445462828678806,
    },
    {
      payload: {
        id: "08091091-e1a5-5fc8-bc09-6ed96490d8f2",
        inn: "180500601010",
        name: "ФИЛИППОВ АЛЕКСАНДР НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ФИЛИППОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 117,
      x: 5796.757830547791,
      y: -381.7520246775188,
      vy: -0.4079952291371297,
      vx: -1.010363589938279,
    },
    {
      payload: {
        id: "0bf7954e-01e2-5722-a40d-26e1e9514fc5",
        inn: "180500586700",
        name: "ПЕРЕВОЩИКОВА НАДЕЖДА АРСЕНТЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ПЕРЕВОЩИКОВА",
          firstname: "НАДЕЖДА",
          secondname: "АРСЕНТЬЕВНА",
        },
      },
      index: 118,
      x: 5821.230549137366,
      y: 796.8924465095467,
      vy: 0.8243888502698297,
      vx: -1.9027937700689508,
    },
    {
      payload: {
        id: "0db55cd1-7e21-5f3e-9e11-73bd02e6ab28",
        inn: "180500637909",
        name: "ВОРОНЧИХИН СЕРГЕЙ ОЛЕГОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ВОРОНЧИХИН",
          firstname: "СЕРГЕЙ",
          secondname: "ОЛЕГОВИЧ",
        },
      },
      index: 119,
      x: 6109.3781272870865,
      y: 486.46507710165906,
      vy: 10.881854434925657,
      vx: -4.387271831028718,
    },
    {
      payload: {
        id: "15659788-51a5-52ca-8262-ba1d298c161c",
        inn: "182300802595",
        name: "ПОНОМАРЕВА ЕКАТЕРИНА ЛЕОНИДОВНА",
        type: "person",
        name_obj: {
          lastname: "ПОНОМАРЕВА",
          firstname: "ЕКАТЕРИНА",
          secondname: "ЛЕОНИДОВНА",
        },
      },
      index: 120,
      x: 6134.781172196876,
      y: 90.58395511511725,
      vy: 0.5461599252548194,
      vx: -2.3188855609057817,
    },
    {
      payload: {
        id: "1655e77e-ffe4-50e3-b3b7-8b51ba0ef478",
        inn: "180500562570",
        name: "ПОЗДЕЕВА СВЕТЛАНА ЛЬВОВНА",
        type: "person",
        name_obj: {
          lastname: "ПОЗДЕЕВА",
          firstname: "СВЕТЛАНА",
          secondname: "ЛЬВОВНА",
        },
      },
      index: 121,
      x: 5690.436906137812,
      y: 942.7385077874068,
      vy: -6.106868896680754,
      vx: -3.501330655705786,
    },
    {
      payload: {
        id: "19fb8f12-5052-58e7-8389-de2ba55db8e5",
        inn: "182500555713",
        name: "АРТЕМЬЕВ ПЕТР НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АРТЕМЬЕВ",
          firstname: "ПЕТР",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 122,
      x: 5969.662964960968,
      y: -204.076450502561,
      vy: -8.71038700447416,
      vx: -6.2349864109292366,
    },
    {
      payload: {
        id: "1ac9c0d8-611c-5eac-a0e3-79c105fea1b9",
        inn: "180500608496",
        name: "ВОЛКОВ ИГОРЬ ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ВОЛКОВ",
          firstname: "ИГОРЬ",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 123,
      x: 5996.932913248631,
      y: 673.4698401489603,
      vy: 3.5117600290764632,
      vx: -12.76964170558774,
    },
    {
      payload: {
        id: "1c30c31e-0e1c-5338-bc77-e42c5d0f6d53",
        inn: "182501929873",
        name: "КНЯЗЕВА СВЕТЛАНА МИХАЙЛОВНА",
        type: "person",
        name_obj: {
          lastname: "КНЯЗЕВА",
          firstname: "СВЕТЛАНА",
          secondname: "МИХАЙЛОВНА",
        },
      },
      index: 124,
      x: 5239.100685748002,
      y: 834.3651986838297,
      vy: 0.6784642802122798,
      vx: 1.3572948764662196,
    },
    {
      payload: {
        id: "229f6fdd-8b29-5b1f-af73-21ed2a7f3450",
        inn: "180500564190",
        name: "ШМЕЛЕВА СВЕТЛАНА ИГОРЕВНА",
        type: "person",
        name_obj: {
          lastname: "ШМЕЛЕВА",
          firstname: "СВЕТЛАНА",
          secondname: "ИГОРЕВНА",
        },
      },
      index: 125,
      x: 6183.64673742691,
      y: -183.0018957565494,
      vy: 2.837890286196964,
      vx: -5.517772090004087,
    },
    {
      payload: {
        id: "25eace8e-0755-504d-9f17-0cc995b37e62",
        inn: "180500561054",
        name: "АЛЕКСЕЕВ АНДРЕЙ МИХАЙЛОВИЧ",
        type: "person",
        name_obj: {
          lastname: "АЛЕКСЕЕВ",
          firstname: "АНДРЕЙ",
          secondname: "МИХАЙЛОВИЧ",
        },
      },
      index: 126,
      x: 6190.26328555726,
      y: 770.5379988783127,
      vy: -1.6858193097757017,
      vx: -11.235828070311474,
    },
    {
      payload: {
        id: "26aa3d0d-11d3-5500-9e8a-2c9aaf12b2c6",
        inn: "182300872472",
        name: "НЕВОСТРУЕВ НИКОЛАЙ ЛЕОНИДОВИЧ",
        type: "person",
        name_obj: {
          lastname: "НЕВОСТРУЕВ",
          firstname: "НИКОЛАЙ",
          secondname: "ЛЕОНИДОВИЧ",
        },
      },
      index: 127,
      x: 4825.006435052184,
      y: 503.8263547651003,
      vy: 4.057724382614321,
      vx: -8.086785087244367,
    },
    {
      payload: {
        id: "2cb867b1-b0de-54f9-af5a-dd366ca22390",
        inn: "180500564658",
        name: "АБАШЕВА НАДЕЖДА АРКАДЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "НАДЕЖДА",
          secondname: "АРКАДЬЕВНА",
        },
      },
      index: 128,
      x: 6022.6388896484705,
      y: -773.9517536890858,
      vy: 4.656488900937242,
      vx: -7.621840704093749,
    },
    {
      payload: {
        id: "2d9f1ced-6114-5b61-ac68-59ebd7a72a2b",
        inn: "180500599636",
        name: "МЕДВЕДЦЕВ ОЛЕГ АРКАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "МЕДВЕДЦЕВ",
          firstname: "ОЛЕГ",
          secondname: "АРКАДЬЕВИЧ",
        },
      },
      index: 129,
      x: 5426.130991956107,
      y: 1062.379366869107,
      vy: -2.0743407022414284,
      vx: 1.8936931859626127,
    },
    {
      payload: {
        id: "3302feda-92ea-5d6d-a320-e5920d84cc60",
        inn: "180500560886",
        name: "МЕДВЕДЦЕВ ОЛЕГ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "МЕДВЕДЦЕВ",
          firstname: "ОЛЕГ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 130,
      x: 5572.774804908603,
      y: -437.4946746638372,
      vy: 6.107060584746608,
      vx: -8.930958067804424,
    },
    {
      payload: {
        id: "35e5ab36-3771-571b-ad75-ce44a7c64382",
        inn: "180500455200",
        name: "НИФТАЛЫЕВА НАДЕЖДА ЛЕОНИДОВНА",
        type: "person",
        name_obj: {
          lastname: "НИФТАЛЫЕВА",
          firstname: "НАДЕЖДА",
          secondname: "ЛЕОНИДОВНА",
        },
      },
      index: 131,
      x: 6426.351335434669,
      y: 387.8051344895491,
      vy: 0.019941268847381365,
      vx: -6.306289107452515,
    },
    {
      payload: {
        id: "39b39537-0864-5c46-b487-720b51231db2",
        inn: "180500609764",
        name: "ГОРБУШИНА ИЮЛИЯ ФЕДОРОВНА",
        type: "person",
        name_obj: {
          lastname: "ГОРБУШИНА",
          firstname: "ИЮЛИЯ",
          secondname: "ФЕДОРОВНА",
        },
      },
      index: 132,
      x: 5018.008560716575,
      y: 590.3578448465847,
      vy: -3.332148030996091,
      vx: 2.248401050444125,
    },
    {
      payload: {
        id: "3b1fa4e2-9752-5346-a76d-c4269d517bae",
        inn: "180501183373",
        name: "ХАРИНА НАДЕЖДА БОРИСОВНА",
        type: "person",
        name_obj: {
          lastname: "ХАРИНА",
          firstname: "НАДЕЖДА",
          secondname: "БОРИСОВНА",
        },
      },
      index: 133,
      x: 6060.771509272905,
      y: -424.35153692796575,
      vy: 6.9832544462571,
      vx: 5.368111832311156,
    },
    {
      payload: {
        id: "3f0d51e5-5791-5177-8edf-2522c965fc8b",
        inn: "180501993360",
        name: "БАБИНЦЕВ ДМИТРИЙ АЛЕКСЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАБИНЦЕВ",
          firstname: "ДМИТРИЙ",
          secondname: "АЛЕКСЕЕВИЧ",
        },
      },
      index: 134,
      x: 6327.426030501187,
      y: 947.3035858590206,
      vy: -4.444659229727357,
      vx: -4.497640841226545,
    },
    {
      payload: {
        id: "41768ff5-fd1b-59ba-9393-0806c6a60b49",
        inn: "180500606876",
        name: "АБАШЕВ ВЛАДИМИР АНАТОЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВ",
          firstname: "ВЛАДИМИР",
          secondname: "АНАТОЛЬЕВИЧ",
        },
      },
      index: 135,
      x: 5281.070658808505,
      y: -383.9295325043759,
      vy: -2.426809537232821,
      vx: -2.9373302366160368,
    },
    {
      payload: {
        id: "4223d4f6-88d3-5444-a0ef-f27137e88549",
        inn: "180500637377",
        name: "НАЙМУШИН ВЛАДИМИР ВАЛЕНТИНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "НАЙМУШИН",
          firstname: "ВЛАДИМИР",
          secondname: "ВАЛЕНТИНОВИЧ",
        },
      },
      index: 136,
      x: 6495.432946968968,
      y: -41.66412195687076,
      vy: 4.433604486701563,
      vx: -12.154984771783369,
    },
    {
      payload: {
        id: "4aafdc90-782c-5892-8b8a-76025309a2d5",
        inn: "182904527905",
        name: "ЕФРЕМОВ НИКОЛАЙ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЕФРЕМОВ",
          firstname: "НИКОЛАЙ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 137,
      x: 5312.844126674341,
      y: 1219.5089906545968,
      vy: -4.509039329279175,
      vx: -2.780766843598027,
    },
    {
      payload: {
        id: "4b8b4d89-5a6f-5cc4-8bbe-a2ff6f11206b",
        inn: "180501708662",
        name: "БОГДАНОВ АЛЕКСАНДР НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БОГДАНОВ",
          firstname: "АЛЕКСАНДР",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 138,
      x: 5150.661686351931,
      y: 1077.5615742778655,
      vy: -2.382282951432182,
      vx: 0.4126933635027594,
    },
    {
      payload: {
        id: "4f03339e-e45c-502f-9782-66c04f19acdb",
        inn: "180500609443",
        name: "ЛЕДЯНКИН ЛЕОНИД ВЛАДИМИРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЛЕДЯНКИН",
          firstname: "ЛЕОНИД",
          secondname: "ВЛАДИМИРОВИЧ",
        },
      },
      index: 139,
      x: 6616.469610957516,
      y: 711.6119373839747,
      vy: -2.635391068035059,
      vx: -4.90907103844214,
    },
    {
      payload: {
        id: "54919fe2-8226-5de4-92e9-5471d4af78bd",
        inn: "182909777024",
        name: "ЕФРЕМОВ ВЛАДИМИР ВАСИЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЕФРЕМОВ",
          firstname: "ВЛАДИМИР",
          secondname: "ВАСИЛЬЕВИЧ",
        },
      },
      index: 140,
      x: 4800.340573810148,
      y: 722.1176755435665,
      vy: -0.26356258423789064,
      vx: -1.9505604862813382,
    },
    {
      payload: {
        id: "55a10fcc-8d15-558a-b37e-867f2ebf6364",
        inn: "181202137564",
        name: "ДЕРЕНДЯЕВ ДМИТРИЙ НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ДЕРЕНДЯЕВ",
          firstname: "ДМИТРИЙ",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 141,
      x: 6325.335819009744,
      y: 46.11255555805648,
      vy: 8.129595215076188,
      vx: -9.597066593862385,
    },
    {
      payload: {
        id: "5e85a40c-88b4-5067-8dcc-4d7c5cb0d311",
        inn: "180500585048",
        name: "ГОРБУШИН ИВАН ЕВСТЕГНЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ГОРБУШИН",
          firstname: "ИВАН",
          secondname: "ЕВСТЕГНЕЕВИЧ",
        },
      },
      index: 142,
      x: 6251.078534769101,
      y: 1121.0485650922767,
      vy: -6.237034662844633,
      vx: -4.011015810809009,
    },
    {
      payload: {
        id: "5f864e81-c962-52ac-98eb-559ef2d37483",
        inn: "180501585700",
        name: "ДОЦЕНКО СЕРГЕЙ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ДОЦЕНКО",
          firstname: "СЕРГЕЙ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 143,
      x: 5422.968600186601,
      y: -570.3926900841211,
      vy: 9.512954448814119,
      vx: -0.16273099036693592,
    },
    {
      payload: {
        id: "614a5810-16d3-5b66-8b44-ae4cc679c21b",
        inn: "180502191105",
        name: "САВИНА АНЖЕЛИКА ВИТАЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "САВИНА",
          firstname: "АНЖЕЛИКА",
          secondname: "ВИТАЛЬЕВНА",
        },
      },
      index: 144,
      x: 6689.974154042203,
      y: 454.0726260773173,
      vy: -8.271804787781125,
      vx: -6.604301208243198,
    },
    {
      payload: {
        id: "648de586-77c3-5a5a-83e2-06a73636b988",
        inn: "180500551190",
        name: "СУВОРОВА ТАТЬЯНА ЮРЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "СУВОРОВА",
          firstname: "ТАТЬЯНА",
          secondname: "ЮРЬЕВНА",
        },
      },
      index: 145,
      x: 5030.9248353925,
      y: 798.1073942354643,
      vy: -6.2501299754498705,
      vx: -7.872815074261848,
    },
    {
      payload: {
        id: "65fe701a-6dbf-5330-b5e5-244b479fe679",
        inn: "180500637698",
        name: "ЛЕДЯНКИН ПЁТР АРКАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЛЕДЯНКИН",
          firstname: "ПЁТР",
          secondname: "АРКАДЬЕВИЧ",
        },
      },
      index: 146,
      x: 6163.213331727815,
      y: -629.2693864638068,
      vy: 4.134324798236569,
      vx: -1.315280764027719,
    },
    {
      payload: {
        id: "67fe81b8-9822-51e6-86d1-0579e220e47d",
        inn: "183702524445",
        name: "ВОРОНЧИХИНА ГАЛИНА ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ВОРОНЧИХИНА",
          firstname: "ГАЛИНА",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 147,
      x: 6078.029471525752,
      y: 939.8797131609217,
      vy: 1.8701367603669523,
      vx: -2.764762500163915,
    },
    {
      payload: {
        id: "68bea73f-9e26-56a8-a313-39af61438c4f",
        inn: "180501290181",
        name: "КНЯЗЕВА ОКСАНА ГЕОРГИЕВНА",
        type: "person",
        name_obj: {
          lastname: "КНЯЗЕВА",
          firstname: "ОКСАНА",
          secondname: "ГЕОРГИЕВНА",
        },
      },
      index: 148,
      x: 4861.313240254208,
      y: -338.6585761526787,
      vy: 6.180008569707528,
      vx: 5.2262640966397615,
    },
    {
      payload: {
        id: "6f9c9979-3df5-59e8-963a-624bd0a97390",
        inn: "180500167837",
        name: "БАЖЕНОВ ВИТАЛИЙ НИКОЛАЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "БАЖЕНОВ",
          firstname: "ВИТАЛИЙ",
          secondname: "НИКОЛАЕВИЧ",
        },
      },
      index: 149,
      x: 6408.190840414302,
      y: -217.63221579435555,
      vy: 7.743995857714757,
      vx: -3.4627729230531017,
    },
    {
      payload: {
        id: "71e0ba33-a89a-58e1-854e-24367693260f",
        inn: "180501170053",
        name: "ВОЛКОВА ТАТЬЯНА НИКОЛАЕВНА",
        type: "person",
        name_obj: {
          lastname: "ВОЛКОВА",
          firstname: "ТАТЬЯНА",
          secondname: "НИКОЛАЕВНА",
        },
      },
      index: 150,
      x: 5687.88965407647,
      y: 1141.45562329953,
      vy: -6.089523116233752,
      vx: -3.1086143454121844,
    },
    {
      payload: {
        id: "75dad68c-310f-5331-aa1a-c75cda7585b7",
        inn: "180501427630",
        name: "СУВОРОВА ВАЛЕНТИНА ЮРЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "СУВОРОВА",
          firstname: "ВАЛЕНТИНА",
          secondname: "ЮРЬЕВНА",
        },
      },
      index: 151,
      x: 5914.183013662073,
      y: -581.6555474086738,
      vy: 5.182153474893266,
      vx: 3.6709656962871318,
    },
    {
      payload: {
        id: "7720c7c5-daa6-5319-88d3-8e2fb4a6d982",
        inn: "182300859626",
        name: "АБАШЕВА НАДЕЖДА СЕРГЕЕВНА",
        type: "person",
        name_obj: {
          lastname: "АБАШЕВА",
          firstname: "НАДЕЖДА",
          secondname: "СЕРГЕЕВНА",
        },
      },
      index: 152,
      x: 6334.607070010144,
      y: 640.6443353984572,
      vy: 4.510664892340695,
      vx: -3.427667789875699,
    },
    {
      payload: {
        id: "7eeaece5-504f-5f79-b844-d379d78d2ae3",
        inn: "180500600200",
        name: "СУВОРОВ ВЛАДИМИР ГЕННАДЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "СУВОРОВ",
          firstname: "ВЛАДИМИР",
          secondname: "ГЕННАДЬЕВИЧ",
        },
      },
      index: 153,
      x: 4710.642865891615,
      y: 103.85079378364847,
      vy: -2.556135479655363,
      vx: 1.3441792619160329,
    },
    {
      payload: {
        id: "8da770dc-cd18-5747-92a2-4c419456450e",
        inn: "180201910807",
        name: "СОЛОВЬЕВА ОЛЬГА АНАТОЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "СОЛОВЬЕВА",
          firstname: "ОЛЬГА",
          secondname: "АНАТОЛЬЕВНА",
        },
      },
      index: 154,
      x: 6288.542929094366,
      y: -398.70285511237745,
      vy: 9.490288902601986,
      vx: -1.3101038172603057,
    },
    {
      payload: {
        id: "9363aacb-694d-5e58-9fca-c914f8d5855c",
        inn: "180500582470",
        name: "ЗЛОБИНА НАТАЛИЯ АНАТОЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ЗЛОБИНА",
          firstname: "НАТАЛИЯ",
          secondname: "АНАТОЛЬЕВНА",
        },
      },
      index: 155,
      x: 4899.342889950223,
      y: 196.58753216905816,
      vy: 3.6448424896606935,
      vx: -3.3811924817557415,
    },
    {
      payload: {
        id: "a32e5506-b275-5342-9613-b1dfdd9289f1",
        inn: "432917047155",
        name: "ФИЛИППОВА ВЕРОНИКА АНАТОЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ФИЛИППОВА",
          firstname: "ВЕРОНИКА",
          secondname: "АНАТОЛЬЕВНА",
        },
      },
      index: 156,
      x: 5205.1830344145765,
      y: -635.4910591084247,
      vy: 1.4283619022538399,
      vx: -0.3470313361169202,
    },
    {
      payload: {
        id: "acc20480-e90a-517d-9af2-fb1e3cc995b7",
        inn: "180500568677",
        name: "САЛТЫКОВА НАТАЛЬЯ ВЯЧЕСЛАВОВНА",
        type: "person",
        name_obj: {
          lastname: "САЛТЫКОВА",
          firstname: "НАТАЛЬЯ",
          secondname: "ВЯЧЕСЛАВОВНА",
        },
      },
      index: 157,
      x: 6691.896970875493,
      y: 49.991726161239285,
      vy: 1.0759972220113874,
      vx: -12.154069860294543,
    },
    {
      payload: {
        id: "b2c2760c-ab9f-566a-b110-f44393854629",
        inn: "182500597209",
        name: "ЕВСЕЕВА НАДЕЖДА РОЛИЕВНА",
        type: "person",
        name_obj: {
          lastname: "ЕВСЕЕВА",
          firstname: "НАДЕЖДА",
          secondname: "РОЛИЕВНА",
        },
      },
      index: 158,
      x: 4963.405423480505,
      y: 977.6055479095232,
      vy: 3.2426558602250837,
      vx: -2.6511017203082603,
    },
    {
      payload: {
        id: "b2f28671-a38e-5d87-851e-8a840fe96450",
        inn: "182905928931",
        name: "ВОЛКОВА ЕКАТЕРИНА ВЛАДИМИРОВНА",
        type: "person",
        name_obj: {
          lastname: "ВОЛКОВА",
          firstname: "ЕКАТЕРИНА",
          secondname: "ВЛАДИМИРОВНА",
        },
      },
      index: 159,
      x: 5690.166204782511,
      y: -638.0555969155783,
      vy: 7.760216415815912,
      vx: -0.8680139255438991,
    },
    {
      payload: {
        id: "b4ef4a80-b712-5fc6-a2fe-10278b9d377d",
        inn: "180500557682",
        name: "БАБУРИНА ИРИНА ВИКТОРОВНА",
        type: "person",
        name_obj: {
          lastname: "БАБУРИНА",
          firstname: "ИРИНА",
          secondname: "ВИКТОРОВНА",
        },
      },
      index: 160,
      x: 6495.789861280388,
      y: 870.8844820705247,
      vy: -4.548738334524701,
      vx: -4.964530211913606,
    },
    {
      payload: {
        id: "b781b129-0a08-5837-8852-f078bd2c5e8d",
        inn: "182300975340",
        name: "ЧУВАШОВА АННА МИХАЙЛОВНА",
        type: "person",
        name_obj: {
          lastname: "ЧУВАШОВА",
          firstname: "АННА",
          secondname: "МИХАЙЛОВНА",
        },
      },
      index: 161,
      x: 4768.4201300509485,
      y: -114.73932604282881,
      vy: 2.9842756365606586,
      vx: 0.5085694394933336,
    },
    {
      payload: {
        id: "b970cb6c-1a05-5184-9452-7eaabf0b0fb0",
        inn: "180500600137",
        name: "СУСЛОВ НИКОЛАЙ АЛЕКСАНДРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "СУСЛОВ",
          firstname: "НИКОЛАЙ",
          secondname: "АЛЕКСАНДРОВИЧ",
        },
      },
      index: 162,
      x: 6523.429446712828,
      y: -398.6163772258829,
      vy: 6.967640976529998,
      vx: -7.328606695183238,
    },
    {
      payload: {
        id: "bb3a3a2b-2361-55f3-999e-eaa9efa0d0c2",
        inn: "180500822644",
        name: "СУВОРОВА ТАТЬЯНА СЕРГЕЕВНА",
        type: "person",
        name_obj: {
          lastname: "СУВОРОВА",
          firstname: "ТАТЬЯНА",
          secondname: "СЕРГЕЕВНА",
        },
      },
      index: 163,
      x: 5914.530102656564,
      y: 1065.6543552505948,
      vy: -3.051224534393191,
      vx: -3.9403717396175533,
    },
    {
      payload: {
        id: "bb6a06fd-7675-5c44-871b-8c828971b12e",
        inn: "181500314321",
        name: "НЕВОСТРУЕВ ЮРИЙ ВАЛЕРИАНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "НЕВОСТРУЕВ",
          firstname: "ЮРИЙ",
          secondname: "ВАЛЕРИАНОВИЧ",
        },
      },
      index: 164,
      x: 5591.670610634652,
      y: -816.6419847431758,
      vy: 6.025286465268072,
      vx: -0.8821622261801129,
    },
    {
      payload: {
        id: "bbb67dec-8039-5be7-bd42-e260fe314105",
        inn: "180500568109",
        name: "ПЕРЕВОЩИКОВА ЛАРИСА ВЕНИАМИНОВНА",
        type: "person",
        name_obj: {
          lastname: "ПЕРЕВОЩИКОВА",
          firstname: "ЛАРИСА",
          secondname: "ВЕНИАМИНОВНА",
        },
      },
      index: 165,
      x: 6707.463807276032,
      y: 259.33295966482575,
      vy: 0.8349758110835989,
      vx: -7.53298437101325,
    },
    {
      payload: {
        id: "bd966e11-1cf0-5a19-b744-06c3e1d96b29",
        inn: "180500549265",
        name: "МЕДВЕДЦЕВА НАТАЛЬЯ АНАТОЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "МЕДВЕДЦЕВА",
          firstname: "НАТАЛЬЯ",
          secondname: "АНАТОЛЬЕВНА",
        },
      },
      index: 166,
      x: 4716.053996416812,
      y: 346.4124168366418,
      vy: -0.6865472921020421,
      vx: -1.3940468183335528,
    },
    {
      payload: {
        id: "be0ed764-47a6-529c-a7c3-0e951d1f239d",
        inn: "180500563132",
        name: "ВОЛКОВА ТАТЬЯНА ЕВГЕНЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ВОЛКОВА",
          firstname: "ТАТЬЯНА",
          secondname: "ЕВГЕНЬЕВНА",
        },
      },
      index: 167,
      x: 5079.168545581001,
      y: -337.4244007843497,
      vy: 3.809425565744498,
      vx: -1.9276667510219208,
    },
    {
      payload: {
        id: "c4282da6-2877-51f2-8d76-c9620493ebe2",
        inn: "180500608954",
        name: "АШИХМИН ЮРИЙ ВАСИЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "АШИХМИН",
          firstname: "ЮРИЙ",
          secondname: "ВАСИЛЬЕВИЧ",
        },
      },
      index: 168,
      x: 5551.221138242685,
      y: 1278.4854061348417,
      vy: -3.978270388364685,
      vx: -1.8976917992432192,
    },
    {
      payload: {
        id: "cb729385-0719-524b-a401-625541261fad",
        inn: "182500225698",
        name: "ЕВСЕЕВ ЕВГЕНИЙ АНАТОЛЬЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЕВСЕЕВ",
          firstname: "ЕВГЕНИЙ",
          secondname: "АНАТОЛЬЕВИЧ",
        },
      },
      index: 169,
      x: 5024.3546420209495,
      y: -548.5296144430858,
      vy: 4.391296755008632,
      vx: 1.4589409751623017,
    },
    {
      payload: {
        id: "cc154016-b21d-574c-831b-193ebfd8277c",
        inn: "180501401705",
        name: "ЕРОФЕЕВ МИХАИЛ ПЕТРОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЕРОФЕЕВ",
          firstname: "МИХАИЛ",
          secondname: "ПЕТРОВИЧ",
        },
      },
      index: 170,
      x: 6643.936510520228,
      y: -187.51957283621533,
      vy: 8.33439039418329,
      vx: -6.817905948299087,
    },
    {
      payload: {
        id: "cf418116-6915-5e6e-ae49-7fd24d2e584f",
        inn: "180500609203",
        name: "КАСИМОВ ГАЙСА ШАЙХУЛИСЛАМОВИЧ",
        type: "person",
        name_obj: {
          lastname: "КАСИМОВ",
          firstname: "ГАЙСА",
          secondname: "ШАЙХУЛИСЛАМОВИЧ",
        },
      },
      index: 171,
      x: 5834.441750467399,
      y: 1289.210866310375,
      vy: -2.7222218616630345,
      vx: -5.396444937310662,
    },
    {
      payload: {
        id: "cfe97372-21ce-545b-b4df-2622f8ac8d17",
        inn: "180501702244",
        name: "ИСТЕРИНА ЕКАТЕРИНА ВЛАДИМИРОВНА",
        type: "person",
        name_obj: {
          lastname: "ИСТЕРИНА",
          firstname: "ЕКАТЕРИНА",
          secondname: "ВЛАДИМИРОВНА",
        },
      },
      index: 172,
      x: 5823.88259554658,
      y: -816.7245376091018,
      vy: 5.366311723665401,
      vx: -1.5918402696706964,
    },
    {
      payload: {
        id: "d170c0c8-0d37-5477-8b0b-a8ba92d99822",
        inn: "181801554817",
        name: "ЯКОВЛЕВ АЛЕКСЕЙ СЕМЕНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "ЯКОВЛЕВ",
          firstname: "АЛЕКСЕЙ",
          secondname: "СЕМЕНОВИЧ",
        },
      },
      index: 173,
      x: 6521.3081321191,
      y: 553.8321181647807,
      vy: -1.3978949666903395,
      vx: -5.619920040661368,
    },
    {
      payload: {
        id: "e4ed9e96-5ff5-5e6e-9447-b5f8ef7d39f1",
        inn: "180500568420",
        name: "ГОРБУШИНА ОЛЬГА АНАТОЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ГОРБУШИНА",
          firstname: "ОЛЬГА",
          secondname: "АНАТОЛЬЕВНА",
        },
      },
      index: 174,
      x: 4981.921135441941,
      y: -110.03673970075576,
      vy: 1.1728630469350014,
      vx: -5.919832521653444,
    },
    {
      payload: {
        id: "ee76af27-ab56-552a-a41a-4e1ac4361cfb",
        inn: "180500607118",
        name: "ГОРБУШИН МИХАИЛ ЕВСТЕГНЕЕВИЧ",
        type: "person",
        name_obj: {
          lastname: "ГОРБУШИН",
          firstname: "МИХАИЛ",
          secondname: "ЕВСТЕГНЕЕВИЧ",
        },
      },
      index: 175,
      x: 6364.950634897802,
      y: -589.1526856170235,
      vy: 9.467124634259536,
      vx: -4.821935332799498,
    },
    {
      payload: {
        id: "f27c50fc-87ff-5a5b-b508-4567ac4602b6",
        inn: "180500791805",
        name: "ЛЕДЯНКИНА ВАЛЕНТИНА ВАЛЕРЬЯНОВНА",
        type: "person",
        name_obj: {
          lastname: "ЛЕДЯНКИНА",
          firstname: "ВАЛЕНТИНА",
          secondname: "ВАЛЕРЬЯНОВНА",
        },
      },
      index: 176,
      x: 6066.524147121398,
      y: 1217.80429421167,
      vy: -2.1971618498847265,
      vx: -5.233609332208833,
    },
    {
      payload: {
        id: "f6542562-f2fa-5abf-aa5a-3f71748a202b",
        inn: "180500591130",
        name: "СУВОРОВ ПАВЕЛ ВАЛЕНТИНОВИЧ",
        type: "person",
        name_obj: {
          lastname: "СУВОРОВ",
          firstname: "ПАВЕЛ",
          secondname: "ВАЛЕНТИНОВИЧ",
        },
      },
      index: 177,
      x: 5381.490471806418,
      y: -776.2505397890014,
      vy: 3.872454639840282,
      vx: 7.442510400802582,
    },
    {
      payload: {
        id: "fbbb47db-026f-521b-9a92-e8da1fbb304a",
        inn: "180500567793",
        name: "ВОЛКОВА ОЛЬГА ВАСИЛЬЕВНА",
        type: "person",
        name_obj: {
          lastname: "ВОЛКОВА",
          firstname: "ОЛЬГА",
          secondname: "ВАСИЛЬЕВНА",
        },
      },
      index: 178,
      x: 6521.1251170494625,
      y: 172.6443326575328,
      vy: -1.7148047446842032,
      vx: -7.288508690214444,
    },
  ],
  links: [
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "005d1541-99e5-5517-9a33-c004478420b9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "0527549e-ac33-5538-8ab0-738f9265e426",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "КОНКУРСНЫЙ УПРАВЛЯЮЩИЙ",
          archived: false,
          last_seen: "2022-11-06T00:00:00",
          first_seen: "2022-02-25T00:00:00",
        },
      ],
      source: "0863c8aa-29ce-5852-86ec-f0188d73f4a9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "16c38355-b9b7-52b9-9836-8c0020586b8d",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "КОНКУРСНЫЙ УПРАВЛЯЮЩИЙ",
          archived: true,
          last_seen: "2022-02-24T00:00:00",
          first_seen: "2018-12-17T00:00:00",
        },
      ],
      source: "1c491eb6-de27-58d1-9b07-210c8e94702e",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "1f199fa6-ab25-5db2-9b3c-b2edfd571a0d",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2186118b-aac2-5f98-bd35-7a03e25c3e93",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "21d37c39-d42d-5583-8b22-98c71e1fc8cb",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "27a8eba8-072a-5a71-9054-78ad3846655f",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "28800f45-3a0b-5292-9ced-6f145d360303",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2a9ecc2e-a757-5937-99cc-87050bbf35e2",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2ac40c66-d980-5c58-928c-0da4ffca14a5",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: true,
          last_seen: "2017-02-21T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2b8b8631-d96c-5f8b-84cf-face8480ca61",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2cdcefc3-fa30-5d70-be48-b008322a1fb5",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2e454dc8-5db0-59ab-bbb4-ef179db59941",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "2f83c306-c916-5cb4-9ee6-c2a2ad81e9df",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "328bebef-589c-5e6e-8709-329120f05c3f",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "36939a17-d049-5230-8700-dc1287d03ba5",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "3800d11b-c4b8-5513-b6f5-bbf76542e7ed",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "38df38c7-defa-5777-a13d-bad1540744a6",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "3d82966c-85d1-5f91-9ae7-eb61292d50c6",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "3daa17e3-d4c4-5fb0-b467-91a4b301acf0",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "4262e711-7295-528c-9b71-85e3ded906cb",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "47e214dd-b6d0-5f6b-8e02-d6dc4a0d6972",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "4ad2377f-ccbd-5d83-943b-5da3bc3b5107",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "4d2010db-ffaa-509b-9834-a21682c39584",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5145afcf-a991-54cd-9c0c-03b35c298305",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "51d49bc0-ef88-5814-bec4-8753e21775b9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "51e779ae-9722-518c-9f74-cd457e7ee40e",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "53c64621-db0c-5a95-998b-d0cebd42a07d",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "56135b38-0c90-5eff-bb20-afdf91ef9563",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5a9b92f8-ac36-5253-a0d7-2b00a498bd05",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b1ba8a6-0ce0-53be-88e1-1eea806bd2c1",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5c53855f-09a5-52c3-9e1e-88acde932093",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5ff32676-5d71-5319-9203-d72d26ef1d6e",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "65eee216-f789-5a19-8e03-dec513ae64b2",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "670e0e82-e097-5941-add7-56129e56b621",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: true,
          last_seen: "2018-04-14T00:00:00",
          first_seen: "2018-01-30T00:00:00",
        },
      ],
      source: "67f8e56d-3bee-5329-ba90-a7acbdfa0520",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "6a056bb9-93c7-5b4a-9f4f-a9f0bd4713a9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "6a49d2f7-458d-52f5-900e-4538d837eef2",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "77855594-aaf4-5724-a411-0e73396e9f5f",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "7d9a1306-14ed-5a2f-a4cf-bf8355acefdc",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "7e10a85d-f308-5d1b-9085-bcbe0bd38c9a",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "86136260-c667-51ab-986f-15efaf2bdf87",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "8b33f8b1-7eba-5ab8-b95a-c9687cc8f968",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "8fa2441a-5e13-5651-9cee-8b1479be3274",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "90c85560-d340-5eac-bd6a-5da5cf441464",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "90ca23c9-6cec-518b-a137-ea094b74dcc1",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "919b9fa8-fdd5-5b8b-823b-66dd2ba2de39",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "963bf2f4-9117-59ca-814f-b6266e19e3a8",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "96ea959a-b13a-5bed-966a-e1aad72004f9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "9b19c339-5138-5f79-b7df-1c1aaddb1c2b",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "9b783d89-e242-590a-8759-9c83a9d76f24",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "9e4342b2-9293-531d-9ddd-319564cbe771",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "a04dc086-3697-5726-ae24-44dbdca6f267",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "a40dc323-fefd-55cc-a442-db93b3fec9f9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "a50acbd4-3379-55f8-baec-1da9cb674fe2",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "a79d98a5-1654-5122-a17d-70dc94d7dc5b",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "a9c1529e-76c0-54f3-8c90-40f9d9cb93fe",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ac9101ef-e5f1-53d7-b50c-d49f10285930",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "afba6451-93ee-5dd2-852d-436cf757da34",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b00c6f2c-413d-5eae-b090-aff94e2d1b46",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b1dc7197-f27c-5fe0-b5d5-ec415577147a",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b235570a-c889-523e-96ab-f948d6f4b1bd",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b34351a9-7db1-51b6-8c50-0facfa0b1cf9",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b7056dfc-4183-5d40-ace2-7e6e16ae13fa",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b78b6a03-455c-5259-9a7e-20281fe246ca",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b7b4b9d7-2c2e-56f2-8bc9-bfb7b646b3b7",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "b9be1c20-3db8-5cd6-a59c-b96d0b5a3e1a",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "bddbe363-cb94-5995-bbd1-885bcbd2e98e",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "bf639b6f-c51e-5e70-97f8-16c806989fe0",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "c6a5bc76-c446-55ea-aae5-e83aadeb4478",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "c963974a-18a6-57f9-8d53-2fd37844c481",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ca7a78df-62a0-5e4b-8a9c-37efdd331590",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ccf2eb20-16be-578e-81b6-455e8ce9be23",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "d2df7649-de11-510b-80fe-c43d074e90a4",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "d3135dae-8aee-5fe9-aa81-5fc9295dca4a",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "d47e6404-1182-5555-ae9b-58c5d63755c0",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "d5100cac-e585-5e57-9193-35c4f712327f",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "d91ab6e8-885e-5da2-8535-321fa4be4505",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "db1ee070-2b55-5b34-bd5e-8c64f532fdf8",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "dca5ec9a-af6f-51a0-bd83-da2ebbf55700",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "e2e30d41-699c-5a25-a3cd-4b92aab7a738",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "e90dfc94-e1fe-5137-ae67-1f63e975cf18",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "e94ff2de-71ff-582e-9851-6865ea97b200",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ec4bb80e-cdfc-5f45-935b-63434971cf61",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
          archived: true,
          last_seen: "2017-11-09T00:00:00",
          first_seen: "2017-04-11T00:00:00",
        },
      ],
      source: "ef31fd20-1548-5a1d-89ea-14b273226086",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ef622358-6483-5bfc-984c-5564fe79b787",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "f0e7cf3c-6e2a-5928-9dd4-7d658ee64628",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "f1dc8995-2d3f-52c8-9a5a-e4a9c13d9cde",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "f5e8ff1f-66c8-5581-b308-884ffb72864e",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "f68210b3-3090-5fbf-accd-1a02701bc5a6",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "faf021a0-bf64-55e4-b213-81e7167a3788",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "fec63002-56c0-5b76-968f-daca031084f6",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "ff21c9c2-5b7b-51ab-b2c5-f3233788900f",
      target: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "2ce554d3-45bc-5597-9cb4-4192e3ceb2be",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "4a326c3c-8a2f-55fe-a858-add4ad33cbd1",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "780c2c4b-9045-5cba-8c57-808891844835",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "8d0855a3-c8fc-553a-86a1-f3a487270ee5",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "ef169a0c-18f2-5f8e-a69e-1a0341469c69",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2020-12-31T00:00:00",
          first_seen: "2015-06-22T00:00:00",
        },
      ],
      source: "5b10cded-88f7-5348-b1d4-6986c91c0a6e",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2017-01-24T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "13f4730e-1319-56b4-9d48-37dbf8cb8a63",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "2e2048c9-b1f8-5b2a-95a6-2a2e3f12d57e",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "КОНКУРСНЫЙ УПРАВЛЯЮЩИЙ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2020-11-03T00:00:00",
        },
      ],
      source: "3158db63-f0ea-53ac-83f2-cf631ebfe03f",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "47e881a9-3eb7-5a33-8802-e0eac0c9e655",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "59d00c7e-44a7-5b00-99bd-b0bae411c773",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "5c52f6fe-38a2-5b77-b7b6-44344065c984",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2018-02-08T00:00:00",
        },
      ],
      source: "60d6013a-28c5-52ad-b6d0-bb9cde6e0ca2",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2018-02-08T00:00:00",
        },
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2018-04-08T00:00:00",
          first_seen: "2017-01-31T00:00:00",
        },
      ],
      source: "a2e05d6e-b506-58ed-9784-c746d643e9d1",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2019-01-30T00:00:00",
          first_seen: "2019-01-30T00:00:00",
        },
      ],
      source: "a3cca08f-3d92-52fd-a5bd-529cccaa1d4b",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-16T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "a6850a05-07ba-507c-a818-d4ccd39851c3",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2017-07-19T00:00:00",
          first_seen: "2014-10-18T00:00:00",
        },
      ],
      source: "bf270664-448a-5281-9712-c3a7c55f6696",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2020-02-16T00:00:00",
          first_seen: "2019-08-01T00:00:00",
        },
      ],
      source: "d098568e-872e-5996-a280-5cb1b7739a1c",
      target: "8c12d39e-8db5-52fa-af2f-f36427af2a3a",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "00b773d3-b267-5181-90be-8c722eeca9bf",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "07ae3a01-bf9d-54f9-92ad-ec68b55d5a6e",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "08091091-e1a5-5fc8-bc09-6ed96490d8f2",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "0bf7954e-01e2-5722-a40d-26e1e9514fc5",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "0db55cd1-7e21-5f3e-9e11-73bd02e6ab28",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "15659788-51a5-52ca-8262-ba1d298c161c",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "1655e77e-ffe4-50e3-b3b7-8b51ba0ef478",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "19fb8f12-5052-58e7-8389-de2ba55db8e5",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "1ac9c0d8-611c-5eac-a0e3-79c105fea1b9",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2022-03-04T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "1c30c31e-0e1c-5338-bc77-e42c5d0f6d53",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "229f6fdd-8b29-5b1f-af73-21ed2a7f3450",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "25eace8e-0755-504d-9f17-0cc995b37e62",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "26aa3d0d-11d3-5500-9e8a-2c9aaf12b2c6",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "2cb867b1-b0de-54f9-af5a-dd366ca22390",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "2d9f1ced-6114-5b61-ac68-59ebd7a72a2b",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "3302feda-92ea-5d6d-a320-e5920d84cc60",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "35e5ab36-3771-571b-ad75-ce44a7c64382",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "39b39537-0864-5c46-b487-720b51231db2",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "3b1fa4e2-9752-5346-a76d-c4269d517bae",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "3f0d51e5-5791-5177-8edf-2522c965fc8b",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "41768ff5-fd1b-59ba-9393-0806c6a60b49",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "4223d4f6-88d3-5444-a0ef-f27137e88549",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "4aafdc90-782c-5892-8b8a-76025309a2d5",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "4b8b4d89-5a6f-5cc4-8bbe-a2ff6f11206b",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2021-09-22T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "4f03339e-e45c-502f-9782-66c04f19acdb",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "54919fe2-8226-5de4-92e9-5471d4af78bd",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "ЗАМЕСТИТЕЛЬ ПРЕДСЕДАТЕЛЯ",
          archived: true,
          last_seen: "2020-10-05T00:00:00",
          first_seen: "2020-09-21T00:00:00",
        },
      ],
      source: "55a10fcc-8d15-558a-b37e-867f2ebf6364",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "5e85a40c-88b4-5067-8dcc-4d7c5cb0d311",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "5f864e81-c962-52ac-98eb-559ef2d37483",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "614a5810-16d3-5b66-8b44-ae4cc679c21b",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "648de586-77c3-5a5a-83e2-06a73636b988",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "65fe701a-6dbf-5330-b5e5-244b479fe679",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "67fe81b8-9822-51e6-86d1-0579e220e47d",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "68bea73f-9e26-56a8-a313-39af61438c4f",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "6f9c9979-3df5-59e8-963a-624bd0a97390",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "71e0ba33-a89a-58e1-854e-24367693260f",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "75dad68c-310f-5331-aa1a-c75cda7585b7",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "7720c7c5-daa6-5319-88d3-8e2fb4a6d982",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "7eeaece5-504f-5f79-b844-d379d78d2ae3",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "8da770dc-cd18-5747-92a2-4c419456450e",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2022-05-12T00:00:00",
        },
      ],
      source: "9363aacb-694d-5e58-9fca-c914f8d5855c",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "a32e5506-b275-5342-9613-b1dfdd9289f1",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "acc20480-e90a-517d-9af2-fb1e3cc995b7",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "b2c2760c-ab9f-566a-b110-f44393854629",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "b2f28671-a38e-5d87-851e-8a840fe96450",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "b4ef4a80-b712-5fc6-a2fe-10278b9d377d",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "b781b129-0a08-5837-8852-f078bd2c5e8d",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "b970cb6c-1a05-5184-9452-7eaabf0b0fb0",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "bb3a3a2b-2361-55f3-999e-eaa9efa0d0c2",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "bb6a06fd-7675-5c44-871b-8c828971b12e",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "bbb67dec-8039-5be7-bd42-e260fe314105",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "bd966e11-1cf0-5a19-b744-06c3e1d96b29",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2020-10-23T00:00:00",
          first_seen: "2020-10-02T00:00:00",
        },
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-04-27T00:00:00",
        },
      ],
      source: "be0ed764-47a6-529c-a7c3-0e951d1f239d",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2021-09-22T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "c4282da6-2877-51f2-8d76-c9620493ebe2",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "cb729385-0719-524b-a401-625541261fad",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "cc154016-b21d-574c-831b-193ebfd8277c",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: true,
          last_seen: "2021-09-22T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "cf418116-6915-5e6e-ae49-7fd24d2e584f",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "cfe97372-21ce-545b-b4df-2622f8ac8d17",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2021-03-26T00:00:00",
          first_seen: "2021-03-26T00:00:00",
        },
        {
          name: "ПРЕДСЕДАТЕЛЬ",
          archived: true,
          last_seen: "2020-10-02T00:00:00",
          first_seen: "2014-05-12T00:00:00",
        },
      ],
      source: "d170c0c8-0d37-5477-8b0b-a8ba92d99822",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "e4ed9e96-5ff5-5e6e-9447-b5f8ef7d39f1",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "ee76af27-ab56-552a-a41a-4e1ac4361cfb",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-22T00:00:00",
        },
      ],
      source: "f27c50fc-87ff-5a5b-b508-4567ac4602b6",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-11-02T00:00:00",
        },
      ],
      source: "f6542562-f2fa-5abf-aa5a-3f71748a202b",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
    {
      roles: [
        {
          name: "УЧРЕДИТЕЛЬ",
          archived: false,
          last_seen: "2022-09-19T00:00:00",
          first_seen: "2021-10-27T00:00:00",
        },
      ],
      source: "fbbb47db-026f-521b-9a92-e8da1fbb304a",
      target: "ef19feb9-97a7-5845-bd1b-1cc0e1377e62",
    },
  ],
};
