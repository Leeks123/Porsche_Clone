export type selectDataProp = {
    region: string;
    countries: string[];
  };

export const select: selectDataProp[] = [
  {
    region: 'North America',
    countries: [
      'Canada (english)', 'Canada (french)', 'USA',
    ],
  },
  {
    region: 'Latin America',
    countries: [
      'Argentina', 'Bolivia', 'Brazil', 'Chile',
      'Colombia', 'Costa Rica', 'Dominical Republic',
      'Ecuador', 'El Salvador', 'Guadeloupe', 'Guatemala',
      'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Panama',
      'Paraguay', 'Peru', 'Puerto Rico', 'Trinidad and Tobago',
      'Uruguay', 'Venezuela', 'Others',
    ],
  },
  {
    region: 'Europe',
    countries: [
      'Austria', 'Belarus', 'Belgium', 'Bosnia',
      'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
      'Denmark', 'Estonia', 'Finland', 'France',
      'Georgia', 'Germany', 'Greate Britain', 'Greece',
      'Hungary', 'Iceland', 'Ireland', 'Italy',
      'Lithuania', 'Lavita', 'Luxemburg', 'Macedonia',
      'Malta', 'Moldova', 'Netherlands', 'Norway',
      'Poland', 'Portugal', 'Russia', 'Romania',
      'Serbia', 'Slovakia', 'Slovenia', 'Spain',
      'Sweden', 'Switzerland', 'Ulkraine', 'Others',
    ],
  },
  {
    region: 'Middle East',
    countries: [
      'Abu Dhabi', 'Bahrain', 'Dubai', 'Fujairah',
      'Israel', 'Jordan', 'Kuwait', 'Lebanon',
      'Oman', 'Qatar', 'Saudi Arabia', 'Sharjah',
      'Middle East',
    ],
  },
  {
    region: 'Africa',
    countries: [
      'Alegria', 'Egypt', 'Ghana', 'La Reunion',
      'Morocco', 'Mauritius', 'Nigeria', 'South Africa',
      'Tunisia',
    ],
  },
  {
    region: 'Asia',
    countries: [
      'Armenia', 'Azerbaijan', 'Turkey', 'India',
      'Brunei', 'Bangladesh', 'Cambodia', 'Indonesia',
      'Malaysia', 'Mongolia', 'Philippines', 'Singapore',
      'Sri Lanka', 'Thailand', 'Vietnam', 'China',
      'Hong kong', 'Japan', 'Kazakhstan', 'South Korea',
      'Taiwan', 'Others',
    ],
  },
  {
    region: 'Australia / Oceania',
    countries: [
      'Australia', 'French Polynesia', 'New Caledonia', 'New Zealand', 'Others',
    ],
  },
];
