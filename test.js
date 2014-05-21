var test = require('tape')
var inis = require('./')

test('try some samples', function(t) {
  t.plan(4)
  var title = "Transient gratings on the base of small polarons in thermically reduced LiNbO{sub Bu{sub 1}}; Transiente Gitter auf der Basis kleiner Polaronen in thermisch reduziertem LiNbO{sub 3}"
  var shouldbe = "Transient gratings on the base of small polarons in thermically reduced LiNbO_B_u__1; Transiente Gitter auf der Basis kleiner Polaronen in thermisch reduziertem LiNbO_3"
  t.equal(shouldbe, inis.parseOSTItoINIS(title), 'a long title')
  title = "{Upsilon}{yields}{mu}{sup +}{mu}{+-}"
  shouldbe = '#UPSILON##->##mu#"+#mu##+-#'
  t.equal(inis.parseOSTItoINIS(title), shouldbe, 'special characters')
  title = '#UPSILON##->##mu#""+"a#mu##+-#'
  shouldbe = '{Upsilon}{yields}{mu}{sup {sup +}{sup a}}{mu}{+-}'
  t.equal(inis.parseINIStoOSTI(title), shouldbe, 'backwards')
  
  title = '2a_x__2_+_1 With some other text 4_x'
  shouldbe = '2a{sub x}{sub {sub 2}{sub +}{sub 1}} With some other text 4{sub x}'
  t.equal(inis.parseINIStoOSTI(title), shouldbe, 'more backwards')
  
})
test('convert some things to utf characters', function(t) {
  t.plan(2)
  var title = '{Upsilon}{yields}{mu}{sup -2}{mu}{+-}{dagger}'
  var shouldbe = 'Υ→μ⁻²μ±†'
  t.equal(inis.convertOSTISpecials(title), shouldbe, 'try some fancy OSTI characters')
  title = '2a{sub x}{sub {sub 2}{sub +}{sub 1}} With some other text 4{sub x}'
  shouldbe = '2aₓ{sub ₂₊₁} With some other text 4ₓ'
  t.equal(inis.convertOSTISpecials(title), shouldbe, 'try some fancy OSTI characters with multiple subs')
})
