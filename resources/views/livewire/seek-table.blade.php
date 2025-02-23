<section>
    <div>
        {{$this->table}}
    </div>
    <div class="flex justify-end">
        @if($totMax !== 0 )
            <h5 class="font-bold mt-8" style="margin-top:20px" >
                <span>
                    Total Compatability Score:
                </span>
                <span>
                    {{round($totAdj / $totMax * 100)}} %
                </span>

            </h5>
        @endif
    </div>
</section>
