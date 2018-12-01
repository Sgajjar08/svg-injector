export const src = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path id="a" d="M0 10h8V0H0v10zm0 8h8v-6H0v6zm10 0h8V8h-8v10zm0-18v6h8V0h-8z"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0h24v24H0z"/>
      <g transform="translate(3 3)">
        <mask id="b" fill="#fff">
          <use xlink:href="#a"/>
        </mask>
        <use fill="#000" fill-opacity=".7" xlink:href="#a"/>
        <g mask="url(#b)">
          <path fill="#004876" fill-rule="nonzero" d="M-103-11535H-3v100h-100z"/>
        </g>
      </g>
    </g>
  </svg>
`

export const expected = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path id="a-1" d="M0 10h8V0H0v10zm0 8h8v-6H0v6zm10 0h8V8h-8v10zm0-18v6h8V0h-8z"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0h24v24H0z"/>
      <g transform="translate(3 3)">
        <mask id="b-1" fill="#fff">
          <use xlink:href="#a-1"/>
        </mask>
        <use fill="#000" fill-opacity=".7" xlink:href="#a-1"/>
        <g mask="url(#b-1)">
          <path fill="#004876" fill-rule="nonzero" d="M-103-11535H-3v100h-100z"/>
        </g>
      </g>
    </g>
  </svg>
`

