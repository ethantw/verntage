
'use strict'

const makeArray = ( obj ) => [].slice.call( obj )
const qs  = ( selector, context = document ) => context.querySelector( selector )
const qsa = ( selector, context = document ) => makeArray( context.querySelectorAll( selector ))

Han.fn.putRealBd = function() {
  const context = this.context

  const hangable = qsa( 'h-hangable', context )
  .map(( hangable ) => {
    const cs = qs( ':scope > h-cs', hangable )
    const bd = cs.getAttribute( 'biaodian' )
    cs.innerHTML += `<h-real>${ bd }</h-real>`
  })

  this.hangable = hangable
  return this
}

Han.fn.fixVernHanging = function() {
  const context = this.context

  setTimeout(() => {
  qsa( 'h-hangable', context )
  .forEach(( hangable ) => {
    const outer  = qs( ':scope > h-cs', hangable )
    const inner  = qs( 'h-inner', outer )
    const real   = qs( 'h-real', outer )

    const outerH = outer.offsetHeight
    const innerH = inner.offsetHeight
    const outerW = outer.offsetWidth
    const innerW = inner.offsetWidth
    const realW  = real.offsetWidth
    const realL  = real.style.lineHeight

    if ( innerH !== outerH || ( innerH === 0 && outerH === 0 )) {
      if ( !hangable.matches( ':last-child' )) {
        real.style.marginRight = -( outerW - innerW ) + 'px' 
        //real.style.marginRight = -( outerW - realW/2 ) + 'px' 
      }
    }
  })
  }, 1000 )
  return this 
}

Han.fn.routine.push( 'putRealBd', 'fixVernHanging' )
let inst = Han( document.body ).render()

/*
const doesSupport = Han.support.writingmode
const dftOption   = {
  'biaodian': '',
}

const renderVern = ( context = document.body, option = {}) => {
  const finder = Han.find( context )

  finder
  .avoid( 'rt' )
  .groupify({
    western: true,
    biaodian: true,
  })
  .charify({
    biaodian: true,
    hanzi: true,
    eonmum: true,
  })

  return finder
}

Han.renderVern = renderVern

Han.fn.renderVern = ( option = {}) => {
  this.vern = Han.renderVern( this.context, option )
  return this
}

*/
