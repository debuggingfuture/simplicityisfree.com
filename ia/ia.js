module.exports = {
  categories: [
    {
      title: 'vincent',
      titleCht: '',
      categories: [
        {
          title: 'motto',
          titleCht: '箴',
          infos: [
            'motto.md',
          ]
        },
        {
          title: 'collaboration',
          titleCht: '合作',
          infos: [
            'collaboration.md',
          ]
        },
        // {
        //   title: 'contact',
        //   titleCht: '聯絡',
        //   infos: [
        //     'contact.md',
        //   ]
        // }
      ]
    },
    {
      title: 'work',
      titleCht: '作',
      categories: [
        {
          title: 'voyage wine',
          titleCht: '',
          infos: [
            'voyagewine.md',
          ]
        },
        {
          title: 'experience',
          titleCht: '經驗',
          infos: [
            'vincent_experience_sleeep.md',
            'vincent_experience_initium.md',
            'vincent_experience_1sky.md',
            'vincent_experience_jpmorgan.md'
          ]
        },
        {
          title: 'show me the code',
          titleCht: '',
          infos: [
            'showmethecode.md',
          ]
        },
        {
          title: 'code4hk',
          titleCht: '',
          infos: [
            'code4hk_intro.md',
          ]
        },
      ]
    },
    // {
    //   title: 'tech',
    //   titleCht: '科技',
    //   categories: [
    //     {
    //       title: 'media',
    //       titleCht: '媒體'
    //     },
    //     {
    //       title: 'tech',
    //       titleCht: '媒體'
    //     }
    //   ]
    // },
    // {
    //   title: 'engineering',
    //   titleCht: '工程',
    //   categories: [
    //     {
    //       title: 'Tech',
    //       titleCht: '媒體'
    //     },
    //     {
    //       title: 'Tech',
    //       titleCht: '媒體'
    //     }
    //   ]
    // }
  ],
  infos: [
    {
      category: ['vincent', 'motto'],
      type: 'markdown',
      key: 'motto.md',
      date: '20170101'
    },
    {
      category: ['vincent', 'experience'],
      type: 'markdown',
      heroMedia: 'onesky_square.png',
      key: 'vincent_experience_1sky.md',
      date: '20170101'
    },
    {
      category: ['vincent', 'experience'],
      type: 'markdown',
      heroMedia: 'initium.png',
      key: 'vincent_experience_initium.md',
      date: '20160501'
    },
    {
      category: ['vincent', 'experience'],
      type: 'markdown',
      heroMedia: '/SLEEEP.jpg',
      key: 'vincent_experience_sleeep.md'
    },
    {
      type: 'markdown',
      heroMedia: '/jpmorgan.png',
      key: 'vincent_experience_jpmorgan.md'
    },
    {
      type: 'markdown',
      heroMedia: 'slides.com/chunyinvincentlau/fbreactionsio/embed',
      key: 'fbreactionsio.md'
    },
    {
      type: 'markdown',
      heroMedia: '',
      key: 'collaboration.md'
    },
    {
      type: 'markdown',
      heroMedia: 'code4hk.png',
      key: 'code4hk_intro.md'
    },
    {
      type: 'markdown',
      heroMedia: 'voyagewine.png',
      key: 'voyagewine.md'
    },
    {
      type: 'markdown',
      heroMedia: 'showmethecode.png',
      key: 'showmethecode.md'
    }

  ]
};
