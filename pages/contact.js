export async function getStaticProps() {
  const links = [
    [
      {
        title: 'email',
        href: 'mailto:agarunov.aaron@gmail.com',
        copy: true,
        color: '#ea4335',
      },
      {
        title: 'github',
        href: 'https://github.com/agarun',
        copy: false,
        color: '#333333',
      },
      {
        title: 'linkedin',
        href: 'https://linkedin.com/in/agarunov/',
        color: '#0077b5',
      },
      {
        title: 'twitter',
        href: 'https://twitter.com/agarune',
        color: '#1da1f2',
      },
      {
        title: 'instagram',
        href: 'https://www.instagram.com/agarunov',
        color: '#833ab4',
      },
      {
        title: 'RÉSUMÉ',
        href: 'https://agarun.com/AaronAgarunovResume.pdf',
        color: '#171079',
      },
      {
        title: 'lastfm',
        href: 'http://last.fm/user/aeroecho',
        description: "music I'm listening to",
        color: '#d51007',
      },
      {
        title: 'whatpulse',
        href: 'https://whatpulse.org/intentional',
        description: "how many keys and clicks I've made",
        color: '#58607c',
      },
      {
        title: 'letterboxd',
        href: 'https://letterboxd.com/agarunov/films/',
        description: 'film diary',
        color: '#00e054',
      },
      {
        title: 'keybase',
        href: 'https://keybase.io/agarun',
        description: 'secret messages',
        color: '#4c8eff',
      },
    ],
  ];
  return { props: { links } };
}

function Contact({ links }) {
  return <div />;
}

export default Contact;
