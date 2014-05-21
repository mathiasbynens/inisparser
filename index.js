var ent = require('ent')

var code_map = {
  "Alpha": "#ALPHA#",
  "Beta": "#BETA#",
  "Gamma": "#GAMMA#",
  "Delta": "#DELTA#",
  "Epislon": "#EPSILON#",
  "Zeta": "#ZETA#",
  "Eta": "#ETA#",
  "Theta": "#THETA#",
  "Iota": "#IOTA#",
  "Kappa": "#KAPPA#",
  "Lambda": "#LAMBDA#",
  "Mu": "#MU#",
  "Nu": "#NU#",
  "Xi": "#XI#",
  "Omicron": "#OMICRON#",
  "Pi": "#PI#",
  "Rho": "#RHO#",
  "Sigma": "#SIGMA#",
  "Tau": "#TAU#",
  "Upsilon": "#UPSILON#",
  "Phi": "#PHI#",
  "Chi": "#CHI#",
  "Psi": "#PSI#",
  "Omega": "#OMEGA#",
  "alpha": "#alpha#",
  "beta": "#beta#",
  "gamma": "#gamma#",
  "delta": "#delta#",
  "epsilon": "#epsilon#",
  "zeta": "#zeta#",
  "eta": "#eta#",
  "theta": "#theta#",
  "iota": "#iota#",
  "kappa": "#kappa#",
  "lambda": "#lambda#",
  "mu": "#mu#",
  "nu": "#nu#",
  "xi": "#xi#",
  "omicron": "#omicron#",
  "pi": "#pi#",
  "rho": "#rho#",
  "sigma": "#sigma#",
  "tau": "#tau#",
  "upsilon": "#upsilon#",
  "phi": "#phi#",
  "chi": "#chi#",
  "psi": "#psi#",
  "omega": "#omega#",
  "approx_equal": "#approx =#",
  "ne": "#not =#",
  "identical_to": "#ident to#",
  "up_arrow": "#arrow up#",
  "down_arrow": "#arrow down#",
  "proportional_to": "#propor to#",
  "radical": "#sq root#",
  "yields": "#->#",
  "open_square": "#square#",
  "partial_derivative": "#partial deriv#",
  "l_brace": "#left brace#",
  "r_brace": "#right brace#",
  "Dirac_h": "#Planck constant#",
  "exclamation_point": "#exclamation#",
  "center_dot": "#centre dot#",
  "r_reversible": "#reversible#",
  "infinity": "#infinity#",
  "<=": "#<=#",
  "+-": "#+-#",
  ">=": "#>=#",
  "approx": "#approx#",
  "integral": "#integral#",
  "nabla": "#nabla#",
  "dagger": "#dagger#",
  "percent": "#percent#",
  "lt": "#lt#",
  "gt": "#gt#",
}

var utf_map = {
  "ampersand": "&" ,
  "asterisk": "*" ,
  "at": "@" ,
  "dollar_sign": "$" ,
  "equals": "=" ,
  "exclamation_point": "!" ,
  "gt": "<" ,
  "lt": ">" ,
  "percent": "%" ,
  "plus": "+" ,
  "minus": "-" ,
  "center_dot": "·",
  "dagger": "†",
  
  "sup 0": "°" , // The degree symbol?
  "sup degree": "°" ,
  "sup 1": "¹" ,
  "sup 2": "²" ,
  "sup 3": "³" ,
  "sup 4": "⁴" ,
  "sup 5": "⁵" ,
  "sup 6": "⁶" ,
  "sup 7": "⁷" ,
  "sup 8": "⁸" ,
  "sup 9": "⁹" ,
  "sup n": "ⁿ" ,
  "sup minus": "⁻",
  "sup -": "⁻",
  "sup +": "⁺",
  //Sub scripts

  "sub 0": "₀" ,
  "sub 1": "₁" ,
  "sub 2": "₂" ,
  "sub 3": "₃" ,
  "sub 4": "₄" ,
  "sub 5": "₅" ,
  "sub 6": "₆" ,
  "sub 7": "₇" ,
  "sub 8": "₈" ,
  "sub 9": "₉" ,
  "sub plus": "₊" ,
  "sub +": "₊" ,
  "sub minus": "₋" ,
  "sub -": "₋" ,
  "sub equals": "₌" ,
  "sub x": "ₓ" ,

  //Greek Captials
  "Alpha": "Α",
  "Beta": "Β",
  "Gamma": "Γ",
  "Delta": "Δ",
  "Epsilon": "Ε",
  "Stigma": "Ϛ",
  "Digamma": "Ϝ",
  "Zeta": "Ζ",
  "Eta": "Η",
  "Theta": "Θ",
  "Iota": "Ι",
  "Kappa": "Κ",
  "Lambda": "Λ",
  "Mu": "Μ",
  "Nu": "Ν",
  "Xi": "Ξ",
  "Omicron": "Ο",
  "Pi": "Π",
  "Koppa": "Ϟ",
  "Rho": "Ρ",
  "Sigma": "Σ",
  "Tau": "Τ",
  "Upsilon": "Υ",
  "Phi": "Φ",
  "Chi": "Χ",
  "Psi": "Ψ",
  "Omega": "Ω",
  "Sampi": "Ϡ",

  //Greek lower case
  "alpha": "α",
  "beta": "β",
  "gamma": "γ",
  "delta": "δ",
  "epsilon": "ε",
  "stigma": "ϛ",
  "digamma": "ϝ",
  "zeta": "ζ",
  "eta": "η",
  "theta": "θ",
  "iota": "ι",
  "kappa": "κ",
  "lambda": "λ",
  "mu": "μ",
  "nu": "ν",
  "xi": "ξ",
  "omicron": "ο",
  "pi": "π",
  "koppa": "ϟ",
  "rho": "ρ",
  "sigma": "σ",
  "tau": "τ",
  "upsilon": "υ",
  "phi": "φ",
  "chi": "χ",
  "psi": "ψ",
  "omega": "ω",
  "sampi": "ϡ",

  //Some other characters
  "emdash": "—",
  "endash": "–",
  "Brit_pounds": "£" ,

  //Math symbols
  "+-": "±",
  "aleph": "ℵ",
  "angle": "∠",
  "Angstrom": "Å",
  "angstrom": "Å",
  "because": "∵",
  "contour_integral": "∮",
  "degree": "°",
  "degrees": "°",
  "del": "∇",
  "Dirac_h": "ℏ",
  "divided_by": "÷",
  "double_prime": "″",
  "ell": "ℓ",
  "exists": "∃",
  "forall": "∀",
  "gradient": "∇",
  "h_bar": "ℏ",
  "im": "ℑ",
  "infinity": "∞",
  "integral": "∫",
  "minus": "−",
  "minus_plus": "∓",
  "-+": "∓",
  "nabla": "∇",
  "null": "∅",
  "partial_derivative": "∂",
  "plus_minus": "±",
  "prime": "′",
  "product": "∏",
  "radical": "√",
  "Re": "ℜ",
  "summation": "∑",
  "therefore": "∴",
  "times": "×",
  "top": "⊤",
  "wp": "℘",
  "1/2": "½",
  "1/4": "¼",

  //Relations
  "approx": "≈",
  "approx_equal": "≃",
  "approx_gt": "≳",
  "approximately": "∼",
  "approx_lt": "≲",
  "asymp": "≍",
  "congruent": "≅",
  "dashv": "⊣",
  "doteq": "≐",
  "equivalent_to": "≡",
  "ge": "≥",
  ">=": "≥",
  "gt_or_lt": "≷",
  "identical_to": "≡",
  "le": "≤",
  "<=": "≤",
  "lt_or_gt": "≶",
  "much_gt": "≫",
  "much_lt": "≪",
  "ne": "≠",
  "not_gt": "≯",
  "not_lt": "≮",
  "parallel": "∥",
  "perpendicular": "⊥",
  "prec": "≺",
  "preceq": "≼",
  "proportional_to": "∝",
  "similar_to": "∼",
  "succ": "≻",
  "succeq": "≽",
  "such_that": "∋",
  "vdash": "⊢",
  "contained_in": "⊂",
  "contains": "⊃",
  "element_of": "∈",
  "improper_subset": "⊆",
  "improper_supset": "⊇",
  "intersection": "∩",
  "union": "∪",

  //Arrows
  "down_arrow": "↓",
  "Down_arrow": "⇓",
  "implies": "⇒",
  "l_arrow": "←",
  "L_arrow": "⇐",
  "l_equilibrium": "⇋",
  "leftharpoondown": "↽",
  "leftharpoonup": "↼",
  "leftrightarrow": "↔",
  "Leftrightarrow": "⇔",
  "longleftrightarrow": "⟷",
  "Longleftrightarrow": "⟺",
  "l_reversible": "⇆",
  "nearrow": "↗",
  "nwarrow": "↖",
  "r_arrow": "→",
  "R_arrow": "⇒",
  "r_equilibrium": "⇌",
  "rightleftharppons": "⇌",
  "rightharpoondown": "⇁",
  "rightharpoonup": "⇀",
  "r_reversible": "⇄",
  "searrow": "↘",
  "swarrow": "↙",
  "up_arrow": "↑",
  "Up_arrow": "⇑",
  "updownarrow": "↕",
  "yields": "→"
}

RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function invert(obj) {
  var nval = {}
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) nval[obj[i]] = i
  }
  return nval
}

function expand(s) {
  var rsup = /\{sup\s([0-9- ]{2,})}/g
  var rsub = /\{sub\s([0-9- ]{2,})}/g

  var match = rsup.exec(s)
  while ( match != null ) {
    var replacement = ''
    for ( i = 0; i < match[1].length; i++ ) {
      replacement += '{sup ' + match[1].charAt(i) + '}'
    }
    var toReplace = RegExp.escape(match[0])
    s = s.replace(new RegExp(toReplace), replacement)
    match = rsup.exec(s)
  }
   
  var match = rsub.exec(s)
  while ( match != null ) {
    var replacement = ''
    for ( i = 0; i < match[1].length; i++ ) {
      replacement += '{sub ' + match[1].charAt(i) + '}'
    }
    var toReplace = RegExp.escape(match[0])
    s = s.replace(new RegExp(toReplace), replacement)
    match = rsub.exec(s)
  }
  return s
}

function convertOSTISpecials(input_string) {
  if (!input_string) return
  var s = ent.decode(input_string)
  s = expand(s)

  for (var r in utf_map) {
    s = s.replace(new RegExp("\{" + RegExp.escape(r) + "\}",'g'), utf_map[r])
  }
  
  return s
}

function parseINIStoOSTI(input_string) {
  if (!input_string) return
  var s = ent.decode(input_string)
  var osti_map = invert(code_map)
  for (var r in osti_map) {
    s = s.replace(new RegExp(RegExp.escape(r),'g'), '{' + osti_map[r] + '}')
  }

  var reg = /["_]/g
  var match = reg.exec(s)
  while (match != null) {
    var output = ''
    var prefix = []
    var pos = 0
    var i = match.index
    pos = match.index
    var j = i
    if (s.charAt(i) == '"') prefix.push('{sup ')
    if (s.charAt(i) == '_') prefix.push('{sub ')
    pos += 1
    i += 1
    var todo = 1
    while (todo > 0) {
      while( (s.charAt(pos) == '"') || (s.charAt(pos) == '_') ) {
        i += 1
        if (s.charAt(pos) == '"') prefix.push('{sup ')
        if (s.charAt(pos) == '_') prefix.push('{sub ')
        pos += 1
        todo += 1
      }
      if (prefix.length > 0) {
        output += prefix.join('') + s.charAt(pos) + '}'
        //i = pos + 1
      } else {
        output += '}'
      }
      todo -= 1
      prefix = []
      pos += 1
      i += 1
    }
    if ( (i-j) < 3 ) i += 1
    var toReplace = RegExp.escape(s.substring(j, i-1))
    s = s.replace(new RegExp(toReplace), output)
    reg.lastIndex = 0
    match = reg.exec(s)
  }
  return s
}

function parseOSTItoINIS(input_string) {
  if (!input_string) return
  var s = ent.decode(input_string)
  for (var r in code_map) {
    s = s.replace(new RegExp("\{" + RegExp.escape(r) + "\}",'g'), code_map[r])
  }

  var output = ''
  var prefix = []
  var pos = 0
  var i = s.indexOf('{')
  while (i > -1) {
    if (pos < i) output += s.substring(pos, i)
    var b = i + 1
    var e = i + 4
    pos = i + 5
    var check = s.substring(b,e)
    if (check === 'sub') prefix.push('_')
    if (check === 'sup') prefix.push('"')
    if (check === 'sub' || check === 'sup') {
      var skipping = false
      while ( (s.charAt(pos) != '{') && (s.charAt(pos) != '}') ) {
        if (s.charAt(pos) === '#') {
          if (!skipping) {
            output += prefix.join('') + s.charAt(pos)
          } else {
            output += s.charAt(pos)
            skipping = false
          }
        } else {
          if (!skipping) {
            output += prefix.join('') + s.charAt(pos)
          } else {
            output += s.charAt(pos)
          }
        }
        pos += 1
      }
      while (s.charAt(pos) == '}') {
        prefix.pop()
        pos += 1
        if (prefix.length < 1) {
          break
        }
      }
    }
    i = s.indexOf('{', i + 1)
  }
  if (pos < s.length) output += s.substring(pos)
  return output
}

module.exports.parseOSTItoINIS = parseOSTItoINIS
module.exports.parseINIStoOSTI = parseINIStoOSTI
module.exports.convertOSTISpecials = convertOSTISpecials
