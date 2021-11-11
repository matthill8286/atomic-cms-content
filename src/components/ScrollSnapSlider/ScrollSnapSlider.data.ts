export const pictureEntries = [
  {
    link: null,
    metadata: null,
    assetID: 'featured-asset-69001598',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'https://picsum.photos/1280/400?grayscale',
    thUrl: 'https://picsum.photos/300/200',
  },
  {
    link: null,
    metadata: null,
    assetID: 'featured-asset-69001599',
    sortOrder: 1,
    usageType: 'Product Image',
    url: 'https://picsum.photos/1280/400?grayscale',
    thUrl: 'https://picsum.photos/300/200',
  },
  {
    link: null,
    metadata: null,
    assetID: 'featured-asset-69001597',
    sortOrder: 3,
    usageType: 'Product Image',
    url: 'https://picsum.photos/1280/400?grayscale',
    thUrl: 'https://picsum.photos/300/200',
  },
  {
    link: null,
    metadata: null,
    assetID: 'featured-asset-76257815',
    sortOrder: 2,
    usageType: 'Product Image',
    url: 'https://picsum.photos/1280/400?grayscale',
    thUrl: 'https://picsum.photos/300/200',
  },
  {
    link: null,
    metadata: null,
    assetID: 'featured-asset-76257815',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'https://picsum.photos/1280/400?grayscale',
    thUrl: 'https://picsum.photos/300/200',
  },
]

export const teaserEntries = [
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
]

export const videoEntries = [
  {
    headline: 'Lorem ipsum dolar sit amet',
    usageType: 'Product Video',
    articleEan: '5026555423076',
    videoID: '1222532',
    url: 'https://player.vimeo.com/video/400223292',
    thUrl: 'https://picsum.photos/300/200',
  },
  {
    headline: 'Lorem ipsum dolar sit amet',
    usageType: 'Product Video',
    articleEan: '5026555423076',
    url: 'https://www.youtube.com/embed/-BdbiZcNBXg',
    videoID: '1229191',
    thUrl: 'https://picsum.photos/300/200',
  },
]

export const withVideoEntries = [...videoEntries, pictureEntries[0], pictureEntries[1]]

export const defaultSettings = {
  dots: true,
  // must be false for videos
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const thumbnailSettings = {
  dots: false,
  infinite: true,
  speed: 500,
}

export const multiItemSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
}

export const teaserSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}
