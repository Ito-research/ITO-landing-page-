type IllustrationProps = {
  className?: string;
};

export function MarketIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={`story-illustration market-illustration ${className}`} viewBox="0 0 520 420" role="img" aria-label="A hand-drawn market hall with merchants exchanging goods and keeping a ledger">
      <path className="ill-ground" d="M20 364c108-7 190 6 286 0s132-2 194 0" />
      <path className="ill-architecture" d="M67 184V96l193-67 193 67v88M49 185h422M77 179v-77m66 77V79m70 100V53m71 126V53m70 0v126m69-77v77" />
      <path className="ill-architecture" d="M57 96 260 25 463 96M86 89l174-61 174 61M93 184v-22a20 20 0 0 1 40 0v22m69 0v-31a24 24 0 0 1 48 0v31m49 0v-31a24 24 0 0 1 48 0v31m48 0v-22a20 20 0 0 1 40 0v22" />
      <path className="ill-detail" d="M100 121h24m-24 8h24m72-39h32m-32 9h32m54-30v29m60-9h32m-32 9h32m52 17h24m-24 8h24M117 195h286" />
      <path className="ill-fill" d="m75 102 23-8v13l-23 8zm348 0 23 8v-13l-23-8zM239 54l21-8 21 8v10h-42z" />
      <path className="ill-people" d="M135 340v-66m-9 68v-30a9 9 0 0 1 18 0v30m68-2v-85m-11 84v-41a11 11 0 0 1 22 0v41m158 2v-71m-10 73v-33a10 10 0 0 1 20 0v33m66-2v-51m-9 52v-26a9 9 0 0 1 18 0v26" />
      <circle className="ill-head" cx="135" cy="260" r="10" />
      <circle className="ill-head" cx="214" cy="239" r="11" />
      <circle className="ill-head" cx="361" cy="258" r="10" />
      <circle className="ill-head" cx="416" cy="273" r="9" />
      <path className="ill-clay" d="M207 256q7 8 14 0M353 273q8 7 15 0" />
      <path className="ill-table" d="M240 334h107m-94 0v30m82-30v30m-78-47h74l12 17h-96z" />
      <path className="ill-detail" d="m266 323 19-9 18 9v11h-37zm9-9v-10h18v10m-45-5-9-13m79 13 10-13" />
      <path className="ill-ledger" d="m301 307 27-4 4 25-27 4z" />
      <path className="ill-ledger-line" d="m307 312 16-2m-15 7 17-2m-16 7 10-1" />
      <path className="ill-clay" d="M82 220c26-7 42-7 64 0m255 13c23-9 39-9 57-1" />
      <path className="ill-detail" d="M89 365h80m177 0h83m-335-15h20m229-2h18" />
      <path className="ill-accent-fill" d="m442 224 8 8-8 8-8-8z" />
      <text className="ill-caption" x="260" y="402" textAnchor="middle">A PLACE FOR THE EXCHANGE OF IDEAS</text>
    </svg>
  );
}

export function ResearchIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={`story-illustration ${className}`} viewBox="0 0 520 360" role="img" aria-label="Open research notebooks connect a field of observations to a measured signal">
      <path className="ill-ground" d="M36 318h444" />
      <path className="ill-architecture" d="M76 83h150v196H76zm150 0h150v196H226" />
      <path className="ill-paper" d="M88 96h126v164H88zm150 0h126v164H238z" />
      <path className="ill-detail" d="M104 116h86m-86 12h70m-70 12h79m-79 12h56m-56 12h72m-72 12h62m-62 12h78m-78 12h49m-49 12h73m-49-91 8 8 15-19m-20 56 8 8 15-19" />
      <path className="ill-grid" d="M253 126h95M253 152h95M253 178h95M253 204h95M253 230h95M269 110v130m24-130v130m24-130v130m24-130v130" />
      <path className="ill-graph" d="m252 225 15-26 14 12 14-50 14 39 15-60 13 18 14-38" />
      <circle className="ill-accent-fill" cx="324" cy="140" r="4" />
      <path className="ill-architecture" d="M401 131h68m-57 0v139m46-139v139m-57-108h68m-68 39h68m-68 39h68" />
      <circle className="ill-head" cx="416" cy="111" r="9" />
      <path className="ill-people" d="M416 121v54m-11 0v-28a11 11 0 0 1 22 0v28m-11-1 22 31m-22-31-16 29" />
      <path className="ill-detail" d="M68 293h383m-338 0v18m290-18v18" />
      <text className="ill-caption" x="260" y="344" textAnchor="middle">OBSERVE · QUESTION · TEST</text>
    </svg>
  );
}

export function NotesIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={`story-illustration ${className}`} viewBox="0 0 520 360" role="img" aria-label="A hand-drawn open journal, ink pen and small sprig on a reading table">
      <path className="ill-ground" d="M42 304c114 4 285-4 436 0" />
      <path className="ill-architecture" d="M78 256q79-29 153 1 76-31 160-1v34q-79-27-160 3-76-30-153-3z" />
      <path className="ill-paper" d="M91 249q67-22 135 3v23q-68-24-135-1zm146 3q68-25 142-3v25q-74-22-142 1z" />
      <path className="ill-detail" d="M107 256q45-13 95 2m-93 7q46-14 94 2m-95 6 70 3m40-12 8 3m23-9q49-16 111-2m-110 11q51-16 110-2m-109 11 75-6" />
      <path className="ill-pen" d="m315 72 92 162m-98-158 92 162m-99-158 13-9 9 16-13 8m85 139 12-8 9 15-12 8m-7-25 11-7 18 31-11 7z" />
      <path className="ill-detail" d="m306 65-10 3 14 10" />
      <path className="ill-vase" d="M144 203q8-11 4-28h29q-5 18 4 28l-3 25h-31zm8-28h23" />
      <path className="ill-plant" d="M162 176v-67m0 43q-22-4-25-24 19 2 25 24m0-16q19-3 23-22-18 2-23 22m0-8q-17-7-15-23 15 7 15 23" />
      <path className="ill-clay" d="M161 124q-13-3-18-15m20 1q14-5 19-16" />
      <path className="ill-detail" d="M126 241h72" />
      <path className="ill-accent-fill" d="m105 229 5-7 5 7-5 7z" />
      <text className="ill-caption" x="260" y="340" textAnchor="middle">NOTES FROM THE WORK</text>
    </svg>
  );
}

export function CareersIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={`story-illustration ${className}`} viewBox="0 0 520 360" role="img" aria-label="A quiet studio worktable with an empty chair, a warm window and growing plant">
      <path className="ill-ground" d="M35 314h450" />
      <path className="ill-architecture" d="M109 56h171v187H109zm20 20h131v147H129z" />
      <path className="ill-window" d="M140 92h109v112H140z" />
      <path className="ill-detail" d="M194 92v112m-54-56h109" />
      <path className="ill-sun" d="M159 174c20-26 46-26 66 0" />
      <path className="ill-table" d="M58 249h378m25 0h-30m-348 0v55m318-55v55" />
      <path className="ill-paper" d="M190 219h144l16 30H175z" />
      <path className="ill-detail" d="m218 230 37-3m-34 9 55-5m-51 11 44-4" />
      <path className="ill-chair" d="M355 195h62v82h-62zm0 20h62m-52 62-7 27m56-27 7 27m-67-49h-13v-34h13" />
      <path className="ill-vase" d="M100 215q8-10 4-22h25q-4 12 4 22l-3 22h-27zm7-22h20" />
      <path className="ill-plant" d="M116 193v-54m0 35q-20-4-21-22 16 2 21 22m0-12q18-4 20-20-16 2-20 20m0-7q-14-6-12-19 13 6 12 19" />
      <path className="ill-clay" d="M115 160q-10-4-13-14m14 4q12-4 15-15" />
      <path className="ill-accent-fill" d="m390 104 8-8 8 8-8 8z" />
      <path className="ill-detail" d="M82 314h47m284 0h35" />
      <text className="ill-caption" x="260" y="346" textAnchor="middle">ROOM TO THINK CAREFULLY</text>
    </svg>
  );
}

export function ConsultingIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg className={`story-illustration ${className}`} viewBox="0 0 520 360" role="img" aria-label="Three colleagues study a hand-drawn map of paths and exchange ideas around a table">
      <path className="ill-ground" d="M42 312h436" />
      <path className="ill-architecture" d="M79 68h362v196H79z" />
      <path className="ill-grid" d="M101 90h318v151H101zM165 90v151m63-151v151m63-151v151m63-151v151m-253-101h318m-318 51h318" />
      <path className="ill-map" d="m111 209 48-31 47 10 45-52 42 21 42-39 62 32m-278 17 42 25 42-3 41 36 42-24 41 25 68-47" />
      <circle className="ill-accent-fill" cx="293" cy="157" r="5" />
      <path className="ill-table" d="M90 275h340m-306 0v25m272-25v25" />
      <path className="ill-people" d="M150 274v-50m-12 49v-30a12 12 0 0 1 24 0v30m-12 1-25 24m25-24 22 24m78-24v-61m-13 61v-38a13 13 0 0 1 26 0v38m-13 0-23 24m23-24 21 24m74-25v-51m-11 50v-29a11 11 0 0 1 22 0v29m-11 1-21 24m21-24 20 24" />
      <circle className="ill-head" cx="150" cy="211" r="11" />
      <circle className="ill-head" cx="253" cy="200" r="12" />
      <circle className="ill-head" cx="373" cy="212" r="10" />
      <path className="ill-clay" d="M241 218q11 8 22 0m-99 4 11 5m207-6 10-6" />
      <path className="ill-detail" d="M260 300v-13m-11 13h22" />
      <text className="ill-caption" x="260" y="344" textAnchor="middle">THINK TOGETHER · ACT WITH CARE</text>
    </svg>
  );
}
