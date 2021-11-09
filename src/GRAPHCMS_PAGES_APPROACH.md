# GraphCMS Static Pages approach

## Routing

We have 6 links but one goes off to Keycloak for `Registration or Login` The url for that link is exposed on the Instance.

The 5 that we care about can be handled by `react-router@5` and included within our normal internal routes. The new routes will be
protected.

We will have a `<Page />` component, it will accept a type property, an example is below of the
routes. The Type will be how we can map to the `staticPages` and pluck out the LandingPageId, thus calling 
the `LandingPage` query.

```ts

type pageTypesEnum: "FAQ" | "WHO" | "PRIVACY" | "TERMS" | "POLICY" | "LEGAL" | "CONTACT" | "ABOUT"

export default [
    {
        name: "FAQs",
        path: "/faq",
        render: () => <Page type="FAQ" />
    },
    {
        name: "Who",
        path: "/who-we-are",
        render: () => <Page type="WHO" />
    },
    {
        name: "Privacy policy",
        path: "/privacy-policy",
        render: () => <Page type="PRIVACY" />
    },
    {
        name: "Terms of use",
        path: "/terms-of-use",
        render: () => <Page type="TERMS" / >
    },
    {
        name: "Cookie policy",
        path: "/cookie-policy",
        render: () => <Page type="POLICY" />
    },
    {
        name: "Legal",
        path: "/legal",
        render: () => <Page type="LEGAL" />
    },
    {
        name: "Contact",
        path: "/contact-us",
        render: () => <Page type = "CONTACT" />
    },
     {
        name: "AboutUs",
        path: "/about-us",
        render: () => <Page type="ABOUT" />
    },
]
```

We have

We have

## Static Pages (plural)

We have access to the `StaticInstancesConnection` query, we call this with the inputs:

```
{"first":25,"skip":0,"stage":"DRAFT","where":{"host": "dev"},"orderBy":null}
```

The host input is the important one as `StaticInstancesConnection` are bound to a host.

This returns the header, footer, staticPages, staticPlaylistSection, registrationUrl & logo.

The staticPages field returns the ID's, __typename, name and type of the pages. The `type` is the
important part as we can map the pages to this `type`. E.G

```js

query StaticInstanceConnection($first: Int, $skip: Int, $stage: Stage!, $where: StaticInstanceWhereInput, $orderBy: StaticInstanceOrderByInput) {
    instance: staticInstancesConnection(first: $first, skip: $skip, stage: $stage, where: $where, orderBy: $orderBy) {
        edges {
            node {
                id
                stage
                updatedAt
                createdAt
                footer {
                    entryId: id
                    description
                    links {
                    ... on Link {
                            name
                            icon
                            href
                            to
                            __typename
                        }
                    }
                }
                header {
                    entryId: id
                    links {
                    ... on Link {
                            actionLabel
                            icon
                            href
                            to
                        }
                    }
                }
                host
                id
                logo {
                    id
                    handle
                    fileName
                    mimeType
                    url
                }
                registrationUrl
                staticPages(first: 11) {
                    entryId: id
                    __typename
                    name
                    type
                }
                staticPlaylistSection {
                    entryId: id
                    sectionName
                    staticPlaylists {
                        staticAssetTiles {
                            publishedAt
                            assetID
                            locked
                            competencyLabel
                            providerLabel
                            assetDuration
                            image {
                                url
                            }
                        }
                    }
                }
            }
        }
        aggregate {
            count
        }
    }
}


```

The Instance return data looks like so:

```json
{
    "data": {
        "instance": {
            "edges": [
                {
                    "node": {
                        "id": "ckju2hsko1lwt0a09iktbl9sy",
                        "stage": "DRAFT",
                        "updatedAt": "2021-01-12T15:26:01.599576+00:00",
                        "createdAt": "2021-01-12T14:05:21.175195+00:00",
                        "footer": {
                            "entryId": "ckju308xc0d8q0b659g9479e9",
                            "description": "© 2021 Copyright Alternate Nutrica Campus",
                            "links": [
                                {
                                    "actionLabel": "Privacy policy",
                                    "icon": null,
                                    "href": null,
                                    "to": "privacy-policy",
                                    "__typename": "Link"
                                },
                                {
                                    "actionLabel": "Terms of use",
                                    "icon": null,
                                    "href": null,
                                    "to": "terms-of-use",
                                    "__typename": "Link"
                                },
                                {
                                    "actionLabel": "Cookie policy",
                                    "icon": null,
                                    "href": null,
                                    "to": "cookie-policy",
                                    "__typename": "Link"
                                },
                                {
                                    "actionLabel": "Legal",
                                    "icon": null,
                                    "href": null,
                                    "to": "legal",
                                    "__typename": "Link"
                                }
                            ]
                        },
                        "header": {
                            "entryId": "ckju2nkwo07rj0b1228gcky10",
                            "links": [
                                {
                                    "actionLabel": "FAQs",
                                    "icon": null,
                                    "href": null,
                                    "to": "faq"
                                },
                                {
                                    "actionLabel": "Who we are",
                                    "icon": null,
                                    "href": null,
                                    "to": "who-we-are"
                                },
                                {
                                    "actionLabel": "Register or login",
                                    "icon": null,
                                    "href": "dev.sec.atomic.com",
                                    "to": null
                                },
                                {
                                    "actionLabel": null,
                                    "icon": "facebook.ico",
                                    "href": "facebook.com/novartis",
                                    "to": null
                                },
                                {
                                    "actionLabel": null,
                                    "icon": "instagram.ico",
                                    "href": "instagram.com/content",
                                    "to": null
                                },
                                {
                                    "actionLabel": null,
                                    "icon": "youtube.ico",
                                    "href": "youtube.com/novartis",
                                    "to": null
                                },
                                {
                                    "actionLabel": null,
                                    "icon": "twitter.ico",
                                    "href": "twitter.com/content",
                                    "to": null
                                }
                            ]
                        },
                        "host": "dev",
                        "logo": {
                            "id": "ckju2x3i00apu0b12o0b4fmz0",
                            "handle": "xHlcN913TUWCVhI8CrAc",
                            "fileName": "DANONE_LOGO.png",
                            "mimeType": "image/png",
                            "url": "https://media.graphcms.com/xHlcN913TUWCVhI8CrAc"
                        },
                        "registrationUrl": "dev.sec.atomic.com",
                        "staticPages": [
                            {
                                "entryId": "ckju3g3ww1w3u0948wzyij2fm",
                                "__typename": "LandingPage",
                                "name": "Home",
                                "type": "Home"
                            },
                            {
                                "entryId": "ckju47v5418330b65y2elm7iq",
                                "__typename": "LandingPage",
                                "name": "Asset",
                                "type": "Asset"
                            },
                            {
                                "entryId": "ckju4hrmg08p80950007ufghi",
                                "__typename": "LandingPage",
                                "name": "FAQ",
                                "type": "FAQ"
                            },
                            {
                                "entryId": "ckju4v9qg2yny0a092c621fnz",
                                "__typename": "LandingPage",
                                "name": "Who we are",
                                "type": "AboutUs"
                            },
                            {
                                "entryId": "ckju557rc0bgx0a07hdu9k0uq",
                                "__typename": "LandingPage",
                                "name": "Privacy",
                                "type": "Privacy"
                            },
                            {
                                "entryId": "ckju5dg200kzf0950og5sslja",
                                "__typename": "LandingPage",
                                "name": "Legal",
                                "type": "Legal"
                            }
                        ],
                        "staticPlaylistSection": {
                            "entryId": "ckju327541p800948yb96kuxe",
                            "sectionName": "Top Recommendations",
                            "staticPlaylists": [
                                {
                                    "staticAssetTiles": [
                                        {
                                            "publishedAt": null,
                                            "assetID": 32001,
                                            "locked": true,
                                            "competencyLabel": "5 Competencies",
                                            "providerLabel": "MEDICAL NEWS",
                                            "assetDuration": "16 mins",
                                            "image": {
                                                "url": "https://media.graphcms.com/7JZcejcRkizOJDQZ2Mqt"
                                            }
                                        },
                                        {
                                            "publishedAt": null,
                                            "assetID": 32002,
                                            "locked": true,
                                            "competencyLabel": "6 COMPETENCIES",
                                            "providerLabel": "BBC",
                                            "assetDuration": "16 mins",
                                            "image": {
                                                "url": "https://media.graphcms.com/J25IRsKJSdCSPJPBNVmL"
                                            }
                                        },
                                        {
                                            "publishedAt": null,
                                            "assetID": 32003,
                                            "locked": true,
                                            "competencyLabel": "5 COMPETENCIES",
                                            "providerLabel": "MEDICAL JOURNAL",
                                            "assetDuration": "16 mins",
                                            "image": {
                                                "url": "https://media.graphcms.com/XnK6BwUGS1amE44l4l6n"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ],
            "aggregate": {
                "count": 1
            }
        }
    }
}
```

## Static Page (singular)

We have a page query where you can access a page by its ID, each singluar page has an array of Zones
where we have access to all the pages data, we grab this by going into the `multipleComponents`
array.

This is where the `staticPage` query works it's magic, we can access the pages data by calling for
example the FAQ Page's ID in an example is: `ckju4hrmg08p80950007ufghi`

```js
// This is an extract, the query is below
query staticPage($id: ID!) {
  staticPage(where: {id: "ckju4hrmg08p80950007ufghi"}, stage: DRAFT) {
  ....
  
```

```ts

query staticPage($id: ID!) {
  staticPage(where: {id: $id}, stage: DRAFT) {
    id
    name
    type
    __typename
    zones(first: 500) {
      id
      stage
      updatedAt
      name
      __typename
      type
      multipleComponents {
        ... on ExpandedText {
          entryId: id
          title
          description
        }
        ... on CallToActionPanel {
          entryId: id
        }
        ... on HeroBanner {
          entryId: id
          primaryLabel
          secondaryLabel
          intro
          seperator
          __typename
        }
        ... on StaticPlaylistSection {
          entryId: id
        }
        ... on StaticAssetSection {
          entryId: id
        }
        ... on GenericSection {
          entryId: id
        }
        ... on ProfileGrid {
          entryId: id
        }
      }
    }
  }

```

The response for this page

```json

{
    "data": {
        "staticPage": {
            "id": "ckju4hrmg08p80950007ufghi",
            "name": "FAQ",
            "type": "FAQ",
            "__typename": "LandingPage",
            "zones": [
                {
                    "id": "ckju4axhc0zip0a58oorsmzft",
                    "stage": "DRAFT",
                    "updatedAt": "2021-01-12T15:01:19.018642+00:00",
                    "name": "Hero Banner",
                    "__typename": "Zone",
                    "type": "HerroBanner",
                    "multipleComponents": [
                        {
                            "entryId": "ckju4akd405z8095074780mdr",
                            "primaryLabel": "Rob's Test Edit",
                            "secondaryLabel": null,
                            "intro": "Hi",
                            "seperator": ",",
                            "__typename": "HeroBanner"
                        }
                    ]
                },
                {
                    "id": "ckju4cy0g00050a07mu991fyo",
                    "stage": "DRAFT",
                    "updatedAt": "2021-01-12T15:01:19.018642+00:00",
                    "name": "Expanded Text 1",
                    "__typename": "Zone",
                    "type": "ExpandedText",
                    "multipleComponents": [
                        {
                            "entryId": "ckju4cikw2qgd0a09ve67f58r",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
                            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        }
                    ]
                },
                {
                    "id": "ckju4f1mo1jxv09508y5yyq7e",
                    "stage": "DRAFT",
                    "updatedAt": "2021-01-12T15:01:19.018642+00:00",
                    "name": "Expanded text 2",
                    "__typename": "Zone",
                    "type": "ExpandedText",
                    "multipleComponents": [
                        {
                            "entryId": "ckju4e5zs07o909503g9wfj9y",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
                            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                        }
                    ]
                }
            ]
        }
    }
}
```
